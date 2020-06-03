import { Node } from "@mpkelly/react-editor-kit";
import { CodeFile, CodeType } from "./CodeFile";
import { File } from "../file/File";
export interface CodeEditorStateProps {
    file: File;
}
export declare const useCodeEditorState: (props: CodeEditorStateProps) => {
    codes: CodeFile[];
    activeCode: CodeFile;
    handleCreate: (type: CodeType) => void;
    handleChange: (data: Node[]) => void;
    handleSetActive: (activeCode: CodeFile) => void;
    handleExecuteCode: () => void;
    handleUnlinkCode: (code: CodeFile) => void;
    handleLinkCode: (ids: string[]) => void;
    showLinkCodeDialog: import("react-hanger/useBoolean").UseBoolean;
};
