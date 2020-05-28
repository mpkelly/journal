import { File } from "../file/File";
export declare const useTemplateCreateDialogState: (initialFile: File) => {
    file: File;
    handleCreate: () => void;
    handleNameChange: (name: string) => void;
    deleteOriginal: import("react-hanger/useBoolean").UseBoolean;
};
