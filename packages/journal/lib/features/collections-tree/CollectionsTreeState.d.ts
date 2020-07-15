import { File } from "../file/File";
export declare const useCollectionsTreeState: () => {
    collections: File[];
    addCollection: () => void;
    updateFiles: (files: File[], property: keyof File, value: any) => Promise<void>;
};
