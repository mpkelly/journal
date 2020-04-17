import { IconProps, FlexProps } from "udx-react";
export interface IconButtonProps extends IconProps {
    buttonProps?: FlexProps;
}
export declare const IconButton: (props: IconButtonProps) => JSX.Element;
