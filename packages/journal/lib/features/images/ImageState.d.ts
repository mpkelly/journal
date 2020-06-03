/// <reference types="react" />
import { FileUpload } from "../upload/Upload";
import { Media } from "../media/Media";
export declare const useImageState: () => {
    images: Media[];
    hasNext: boolean;
    hasPrevious: boolean;
    handleNext: () => void;
    handlePrevious: () => void;
    handleDelete: (media: Media) => Promise<void>;
    handleChange: (media: Media) => Promise<void>;
    count: number;
    page: number;
    searchCount: string | number;
    totalPages: number;
    refresh: () => void;
    handleUpload: (upload: FileUpload) => Promise<void>;
    newImages: Media[];
    handleAddMedia: (media: Media[]) => Promise<void>;
    handleSearch: import("react").Dispatch<import("react").SetStateAction<string>>;
};
