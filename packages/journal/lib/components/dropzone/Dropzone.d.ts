import { FlexProps } from "@mpkelly/siam";
export interface DropzoneProps extends FlexProps {
    handleFiles: (files: File[]) => void;
}
export declare const Dropzone: (props: DropzoneProps) => JSX.Element;
