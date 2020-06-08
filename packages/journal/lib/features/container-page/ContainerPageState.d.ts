/// <reference types="react" />
import { FileType, File } from "../file/File";
export declare const PageSize = 12;
export declare const ContainerPageStateProvider: import("react").FunctionComponent<unknown>, useContainerPageState: import("constate/dist/ts/src/types").ContextHookFunction<{
    addItem: (type: FileType) => void;
    handleNameChanged: (name: string) => Promise<void>;
    hasNext: boolean;
    hasPrevious: boolean;
    handleNext: () => void;
    handlePrevious: () => void;
    items: File[];
    count: number;
    page: number;
    totalPages: number;
    showDeleteConfirmation: boolean;
    handleDeleteFile: import("react").Dispatch<import("react").SetStateAction<string | number>>;
    handleConfirmDelete: () => void;
    handleCancelDelete: () => void;
}>;
