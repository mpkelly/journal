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
    activeCode?: CodeFile;
    codes: CodeFile[];
  }>({ activeCode: undefined, codes: [] });

  const { activeCode, codes } = state;

  useEffect(() => {
    if (file.linkedCode) {
      db.getAllCodes(file.linkedCode).then((codes) => {
        if (codes.length) {
          setState({ activeCode: codes[0], codes });
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
        const codes = [code].concat(state.codes);
        return { activeCode: code, codes };
      });
    },
    [file]
  );

  const handleChange = useCallback(
    (data: Node[]) => {
      if (
        activeCode &&
        Node.string(activeCode.data[0]) !== Node.string(data[0])
      ) {
        db.updateCode(activeCode?.id, { data }).then(() => {
          const next = { ...activeCode, data };
          const nextCodes = codes.slice();
          nextCodes.splice(nextCodes.indexOf(activeCode), 1, next);
          setState({ activeCode: next, codes: nextCodes });
          updateStyles(nextCodes);
        });
      }
    },
    [activeCode, codes]
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
        const codes = state.codes.slice();
        codes.splice(codes.indexOf(code), 1);
        return { activeCode: code, codes };
      });
    },
    [file, codes]
  );

  const handleExecuteCode = useCallback(() => {
    if (activeCode) {
      const func = eval(Node.string(activeCode.data[0]));
      const context = {
        nodes: file.data,
      };
      func(context);
    }
  }, [activeCode, file]);

  const handleSetActive = (activeCode: CodeFile) => {
    setState((current) => ({ ...current, activeCode }));
  };

  const updateStyles = (codes: CodeFile[]) => {
    const css = codes
      .filter((code) => code.type === CodeType.Css)
      .map((code) => (code.data ? Node.string(code.data[0]) : ""))
      .join("\n");
    const wrapped = generateCss(`#documenteditor{${css}}`);
    attachEditorStyle(wrapped, String(file.id));
  };

  return {
    codes,
    activeCode,
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
