/// <reference types="react" />
import { Media } from "../media/Media";
import { ImageGridProps } from "./ImageGrid";
export declare const useImageGridState: (props: ImageGridProps) => {
    selected: Media;
    setSelected: import("react").Dispatch<import("react").SetStateAction<Media>>;
    showing: Media;
    setShowing: import("react").Dispatch<import("react").SetStateAction<Media>>;
    images: Media[];
};
