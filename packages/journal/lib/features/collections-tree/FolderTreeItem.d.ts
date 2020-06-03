import { FlexProps } from "@mpkelly/siam";
import { TreeNode } from "@mpkelly/react-tree";
export interface FolderTreeItemProps extends FlexProps {
    file: TreeNode;
    onRename(name: string): void;
}
export declare const FolderTreeItem: (props: FolderTreeItemProps) => JSX.Element;
