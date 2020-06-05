import { useState, useEffect, useCallback } from "react";
import { Node, generateCss } from "@mpkelly/react-editor-kit";
import { CodeFile, CodeType, createCodeFile } from "./CodeFile";
import { useDatabase } from "../database/DatabaseState";
import { File } from "../file/File";
import useBoolean from "react-hanger/useBoolean";

export interface CodeEditorStateProps {
  file: File;
}

let count = 1;

export const useCodeEditorState = (props: CodeEditorStateProps) => {
  const { file } = props;
  const db = useDatabase();

  const [state, setState] = useState<{
    activeCodeFile?: CodeFile;
    codeFiles: CodeFile[];
  }>({ activeCodeFile: undefined, codeFiles: [] });
  const showLinkCodeDialog = useBoolean(false);
  const { activeCodeFile, codeFiles } = state;

  useEffect(() => {
    db.getAllCodeFiles(file.linkedCode || []).then((codeFiles) => {
      if (codeFiles.length) {
        setState({ activeCodeFile: codeFiles[0], codeFiles });
        updateStyles(codeFiles);
      }
    });
  }, [file]);

  const handleCreate = useCallback(
    (type: CodeType) => {
      const name = `New code ${count++}`;
      const code = createCodeFile(type, name);

      db.transact(async () => {
        db.addCodeFile(code);
        const linkedCode = [code.id].concat(file.linkedCode || []);
        file.linkedCode = linkedCode;
        db.updateFile(file.id, { linkedCode });
      }, ["code", "files"]);

      setState((state) => {
        const codes = [code].concat(state.codeFiles);
        return { activeCodeFile: code, codeFiles: codes };
      });
    },
    [file]
  );

  const handleChange = useCallback(
    (data: Node[]) => {
      if (
        activeCodeFile &&
        Node.string(activeCodeFile.data[0]) !== Node.string(data[0])
      ) {
        const next = { ...activeCodeFile, data };
        const nextFiles = codeFiles.slice();
        nextFiles.splice(nextFiles.indexOf(activeCodeFile), 1, next);

        const nextState = {
          activeCodeFile: next,
          codeFiles: nextFiles,
        };
        setState(nextState);
        if (activeCodeFile.type === CodeType.Css) {
          updateStyles(nextFiles);
        }
        db.updateCodeFile(activeCodeFile?.id, { data });
      }
    },
    [activeCodeFile, codeFiles]
  );

  const handleUnlinkCode = useCallback(
    (code: CodeFile) => {
      db.transact(async () => {
        const linkedCode = (file.linkedCode as string[]).slice();
        linkedCode.splice(linkedCode.indexOf(code.id), 1);
        file.linkedCode = linkedCode;
        db.updateFile(file.id, { linkedCode });
      }, ["code", "files"]);

      setState((state) => {
        const files = state.codeFiles.slice();
        files.splice(files.indexOf(code), 1);
        updateStyles(files);
        return { activeCodeFile: files[0], codeFiles: files };
      });
    },
    [file, codeFiles]
  );

  const handleLinkCode = useCallback(
    (ids: string[]) => {
      showLinkCodeDialog.toggle();
      file.linkedCode = (file.linkedCode || []).concat(ids);
      db.getAllCodeFiles(ids, false).then((files) => {
        const next = codeFiles.concat(files);
        setState((current) => ({
          ...current,
          codeFiles: next,
        }));
        updateStyles(next);
      });
      db.updateFile(file.id, { linkedCode: file.linkedCode });
    },

    [file, codeFiles]
  );

  const handleExecuteCode = useCallback(() => {
    if (activeCodeFile) {
      const func = eval(Node.string(activeCodeFile.data[0]));
      const context = {
        nodes: file.data,
      };
      func(context);
    }
  }, [activeCodeFile, file]);

  const handleSetActive = (activeCode: CodeFile) => {
    setState((current) => ({ ...current, activeCodeFile: activeCode }));
  };

  const updateStyles = (codeFiles: CodeFile[]) => {
    const css = codeFiles
      .filter((code) => code.type === CodeType.Css)
      .map((code) => (code.data ? Node.string(code.data[0]) : ""))
      .join("\n");
    const wrapped = generateCss(`${css}`);
    attachEditorStyle(wrapped, String(file.id));
  };

  return {
    codes: codeFiles,
    activeCode: activeCodeFile,
    handleCreate,
    handleChange,
    handleSetActive,
    handleExecuteCode,
    handleUnlinkCode,
    handleLinkCode,
    showLinkCodeDialog,
  };
};

const attachEditorStyle = (css: string, id: string) => {
  const style = document.createElement("style");
  const styleId = `journal-styles-${id}`;
  const existing = document.getElementById(styleId);
  if (existing) {
    existing.parentElement?.removeChild(existing);
  }
  style.id = styleId;
  style.innerText = css;
  document.head.appendChild(style);
};
