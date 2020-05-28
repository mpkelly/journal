import { IconProps, FlexProps } from "@mpkelly/siam";
export interface IconButtonProps extends IconProps {
    buttonProps?: FlexProps;
}
export declare const IconButton: (props: IconButtonProps) => JSX.Element;
