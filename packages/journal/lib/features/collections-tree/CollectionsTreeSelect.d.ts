import { FlexProps } from "@mpkelly/siam";
import { FlatNode } from "@mpkelly/react-tree";
export interface TreeSelectProps extends FlexProps {
    nodes: FlatNode[];
    onChange(node: FlatNode): void;
    selected: FlatNode;
}
export declare const CollectionsTreeSelect: (props: TreeSelectProps) => JSX.Element;
