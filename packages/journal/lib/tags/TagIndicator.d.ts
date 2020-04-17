import { FlexProps } from "udx-react";
import { Tag } from "./Tag";
export interface TagIndicatorProps extends FlexProps {
    tag: Tag;
    onUpdate?(tag: Tag): void;
    onDelete?(): void;
}
export declare const TagIndicator: (props: TagIndicatorProps) => JSX.Element;
