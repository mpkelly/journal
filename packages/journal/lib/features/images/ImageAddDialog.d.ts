import { FlexProps } from "@mpkelly/siam";
import { Media } from "../media/Media";
export interface ImageAddDialogProps extends FlexProps {
    images: Media[];
    onConfirm(images: Media[]): void;
}
export declare const ImageAddDialog: (props: ImageAddDialogProps) => JSX.Element;
