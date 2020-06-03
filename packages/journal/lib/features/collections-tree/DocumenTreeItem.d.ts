import { FlexProps } from "@mpkelly/siam";
import { TreeNode } from "@mpkelly/react-tree";
export interface DocumenTreeItemProps extends FlexProps {
    file: TreeNode;
    onRename(name: string): void;
}
export declare const DocumenTreeItem: (props: DocumenTreeItemProps) => JSX.Element;
