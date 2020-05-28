import { FlexProps } from "@mpkelly/siam";
import { TreeNode } from "../../components/tree-kit/Node";
export interface WikiPageTreeItemProps extends FlexProps {
    file: TreeNode;
    onRename(name: string): void;
}
export declare const WikiPageTreeItem: (props: WikiPageTreeItemProps) => JSX.Element;
