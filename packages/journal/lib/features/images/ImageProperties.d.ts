import { FlexProps } from "@mpkelly/siam";
import { Media } from "../media/Media";
export interface ImagePropertiesProps extends FlexProps {
    image: Media;
    onChange(image: Media): void;
}
export declare const ImageProperties: (props: ImagePropertiesProps) => JSX.Element;
