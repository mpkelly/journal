import { File } from "../file/File";
export declare const useTemplateGridState: () => {
    templates: File[];
    handleDelete: (id: any) => void;
    handleRename: (id: any, name: string) => void;
};
