import { FlexProps } from "@mpkelly/siam";
import { TreeNode } from "@mpkelly/react-tree";
export interface TreeItemProps extends FlexProps {
    icon: string;
    color: string;
    file: TreeNode;
    canExpand?: boolean;
    onRename(name: string): void;
}
export declare const CollectionsTreeItem: (props: TreeItemProps) => JSX.Element;
