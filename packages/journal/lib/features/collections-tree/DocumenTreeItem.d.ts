import { FlexProps } from "@mpkelly/siam";
import { TreeNode } from "../../components/tree-kit/Node";
export interface DocumenTreeItemProps extends FlexProps {
    file: TreeNode;
    onRename(name: string): void;
}
export declare const DocumenTreeItem: (props: DocumenTreeItemProps) => JSX.Element;
