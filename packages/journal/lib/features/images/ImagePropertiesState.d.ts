import { Media } from "../media/Media";
import { ImagePropertiesProps } from "./ImageProperties";
export declare const useImagePropertiesState: (props: ImagePropertiesProps) => {
    image: Media;
    handleChange: (changes: Partial<Media>) => void;
    handleTagsChange: () => void;
    handleDeleteTag: (tag: string) => void;
    handleKey: (event: React.KeyboardEvent) => void;
    tag: import("react-hanger/useInput").UseInput;
};
