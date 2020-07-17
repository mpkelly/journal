import { ReactNode, FC } from "react";
import { FlexProps } from "@mpkelly/siam";
export interface DialogProps extends FlexProps {
    children: ReactNode;
    overlayBackground?: string;
    onClickOutside(): void;
}
export declare const Dialog: FC<DialogProps>;
