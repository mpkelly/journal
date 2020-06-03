import { FlexProps } from "@mpkelly/siam";
import { Media } from "../media/Media";
export interface ImageTileProps extends FlexProps {
    image: Media;
    onClose(): void;
    showPreview: boolean;
}
export declare const ImageTile: (props: ImageTileProps) => JSX.Element;
export declare const getImageSource: (image: Media) => string;
