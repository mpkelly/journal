import { ReactNode } from "react";
import { FlexProps } from "@mpkelly/siam";
export interface CollapseProps extends FlexProps {
    title: ReactNode;
    children: ReactNode;
    initialCollapsed?: boolean;
}
export declare const Collapse: (props: CollapseProps) => JSX.Element;
