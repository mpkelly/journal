import { ReactNode } from "react";
import { TreeNode } from "./Node";
export interface CollapseToggleProps {
    children: ReactNode;
    node: TreeNode;
}
export declare const CollapseToggle: (props: CollapseToggleProps) => JSX.Element;
