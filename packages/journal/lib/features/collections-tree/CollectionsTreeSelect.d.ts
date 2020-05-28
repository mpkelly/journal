import { FlexProps } from "@mpkelly/siam";
import { FlatNode } from "../../components/tree-kit/Node";
export interface TreeSelectProps extends FlexProps {
    nodes: FlatNode[];
    onChange(node: FlatNode): void;
    selected: FlatNode;
}
export declare const CollectionsTreeSelect: (props: TreeSelectProps) => JSX.Element;
