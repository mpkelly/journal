/// <reference types="react" />
export declare const ImagePageStateProvider: import("react").FunctionComponent<unknown>, useImagePageState: import("constate/dist/ts/src/types").ContextHookFunction<{
    images: import("../media/Media").Media[];
    hasNext: boolean;
    hasPrevious: boolean;
    handleNext: () => void;
    handlePrevious: () => void;
    handleDelete: (media: import("../media/Media").Media) => Promise<void>;
    handleChange: (media: import("../media/Media").Media) => Promise<void>;
    count: number;
    page: number;
    searchCount: string | number;
    totalPages: number;
    refresh: () => void;
    handleUpload: (upload: import("../upload/Upload").FileUpload) => Promise<void>;
    newImages: import("../media/Media").Media[];
    handleAddMedia: (media: import("../media/Media").Media[]) => Promise<void>;
    handleSearch: import("react").Dispatch<import("react").SetStateAction<string>>;
}>;
