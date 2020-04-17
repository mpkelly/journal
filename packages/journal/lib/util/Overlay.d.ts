import { FlexProps } from "udx-react";
export interface OverlayProps extends FlexProps {
    children?: any;
    onClick(event: any): any;
}
export declare const Overlay: (props: OverlayProps) => JSX.Element;
