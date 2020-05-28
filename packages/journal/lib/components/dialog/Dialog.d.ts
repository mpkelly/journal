import { ReactNode, FC } from "react";
import { FlexProps } from "@mpkelly/siam";
export interface DialogProps extends FlexProps {
    children: ReactNode;
    onClickOutside(): void;
}
export declare const Dialog: FC<DialogProps>;
