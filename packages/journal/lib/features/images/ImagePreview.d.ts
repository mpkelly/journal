import { FC } from "react";
import { FlexProps } from "@mpkelly/siam";
import { Media } from "../media/Media";
export interface ImagePreviewProps extends FlexProps {
    onClose(): void;
    image: Media;
}
export declare const ImagePreview: (props: ImagePreviewProps) => JSX.Element;
export declare const Image: FC<FlexProps>;
