import { useState, useEffect, useCallback } from "react";
import { Node, generateCss } from "@mpkelly/react-editor-kit";
import { CodeFile, CodeType, createCodeFile } from "./CodeFile";
import { useDatabase } from "../database/DatabaseState";
import { File } from "../file/File";

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

  const { activeCodeFile, codeFiles } = state;

  useEffect(() => {
    if (file.linkedCode) {
      db.getAllCodes(file.linkedCode).then((codes) => {
        if (codes.length) {
          setState({ activeCodeFile: codes[0], codeFiles: codes });
          updateStyles(codes);
        }
      });
    }
  }, [file]);

  const handleCreate = useCallback(
    (type: CodeType) => {
      const name = `New code ${count++}`;
      const code = createCodeFile(type, name);

      db.transact(async () => {
        db.addCode(code);
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
        db.updateCode(activeCodeFile?.id, { data }).then(() => {
          const next = { ...activeCodeFile, data };
          const files = codeFiles.slice();
          files.splice(files.indexOf(activeCodeFile), 1, next);
          setState({ activeCodeFile: next, codeFiles: files });
          updateStyles(files);
        });
      }
    },
    [activeCodeFile, codeFiles]
  );

  const handleUnlinkCode = useCallback(
    (code: CodeFile) => {
      db.transact(async () => {
        const linkedCode = file.linkedCode.slice();
        linkedCode.splice(linkedCode.indexOf(code.id), 1);
        file.linkedCode = linkedCode;
        db.updateFile(file.id, { linkedCode });
      }, ["code", "files"]);

      setState((state) => {
        const files = state.codeFiles.slice();
        files.splice(files.indexOf(code), 1);
        return { activeCodeFile: code, codeFiles: files };
      });
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
    const wrapped = generateCss(`#documenteditor{${css}}`);
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
