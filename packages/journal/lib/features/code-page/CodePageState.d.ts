/// <reference types="react" />
import { CodeFile } from "../code-editor/CodeFile";
export declare const codePageState: () => {
    codeFiles: CodeFile[];
    activeCodeFile: CodeFile;
    itemToDelete: string | number;
    handleEdit: import("react").Dispatch<import("react").SetStateAction<CodeFile>>;
    handleChange: (change: Partial<CodeFile>) => void;
    handleDeleteFile: import("react").Dispatch<import("react").SetStateAction<string | number>>;
    handleConfirmDelete: () => void;
    handleCancelDelete: () => void;
    handleToggleGlobal: (codeFile: CodeFile) => void;
};
export declare const CodePageStateProvider: import("react").FunctionComponent<unknown>, useCodePageState: import("constate/dist/ts/src/types").ContextHookFunction<{
    codeFiles: CodeFile[];
    activeCodeFile: CodeFile;
    itemToDelete: string | number;
    handleEdit: import("react").Dispatch<import("react").SetStateAction<CodeFile>>;
    handleChange: (change: Partial<CodeFile>) => void;
    handleDeleteFile: import("react").Dispatch<import("react").SetStateAction<string | number>>;
    handleConfirmDelete: () => void;
    handleCancelDelete: () => void;
    handleToggleGlobal: (codeFile: CodeFile) => void;
}>;
