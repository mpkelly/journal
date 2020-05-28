import { File } from "../file/File";
export declare const useCollectionsTreeState: () => {
    collections: File[];
    addCollection: () => void;
    updateFile: (item: File) => Promise<void>;
};
