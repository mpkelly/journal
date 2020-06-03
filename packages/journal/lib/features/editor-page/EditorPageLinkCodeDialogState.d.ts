import { CodeFile } from "../code-editor/CodeFile";
export declare const useEditorPageLinkCodeDialogState: (existing: string[]) => {
    codeFiles: CodeFile[];
    selectedFiles: string[];
    handleToggleSelected: (id: string) => void;
    isSelected: (id: string) => boolean;
    canSubmit: boolean;
};
