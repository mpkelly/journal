import { ImageAddDialogProps } from "./ImageAddDialog";
import { Media } from "../media/Media";
export declare const useImageAddDialogState: (props: ImageAddDialogProps) => {
    image: Media;
    images: Media[];
    source: string;
    onConfirm: (images: Media[]) => void;
    page: number;
    hasNext: boolean;
    hasPrevious: boolean;
    handleNext: () => void;
    handlePrevious: () => void;
    totalPages: number;
    handleChange: (image: Media) => void;
};
