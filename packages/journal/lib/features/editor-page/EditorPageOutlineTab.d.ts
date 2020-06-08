import { FlexProps } from "@mpkelly/siam";
import { Node, Element, OutlineEntry } from "@mpkelly/react-editor-kit";
export interface EditorPageOutlineTabProps extends FlexProps {
    value: Element[];
}
export declare const EditorPageOutlineTab: (props: EditorPageOutlineTabProps) => JSX.Element;
export declare const createElementOutline: (nodes: Node[], hideEmpty: boolean, depth?: number) => OutlineEntry[];
