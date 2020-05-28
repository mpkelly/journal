import { ReactNode } from "react";
import { TreeNode } from "./Node";
export interface TreeElementProps {
    children: ReactNode;
    node: TreeNode;
    depth: number;
    dragDisabled?: boolean;
}
export declare const TreeElement: (props: TreeElementProps) => JSX.Element;
export declare const useTreeElement: (props: TreeElementProps) => Object;
