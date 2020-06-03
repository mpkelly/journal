import { FlexProps } from "@mpkelly/siam";
import { TreeNode } from "@mpkelly/react-tree";
export interface CollectionTreeItemProps extends FlexProps {
    file: TreeNode;
    onRename(name: string): void;
}
export declare const CollectionTreeItem: (props: CollectionTreeItemProps) => JSX.Element;
