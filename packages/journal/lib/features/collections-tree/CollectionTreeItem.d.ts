import { FlexProps } from "@mpkelly/siam";
import { TreeNode } from "../../components/tree-kit/Node";
export interface CollectionTreeItemProps extends FlexProps {
    file: TreeNode;
    onRename(name: string): void;
}
export declare const CollectionTreeItem: (props: CollectionTreeItemProps) => JSX.Element;
