import { Tag } from "./Tag";
import { FlexProps } from "@mpkelly/siam";
export interface TagsProps extends FlexProps {}
export declare const Tags: (props: TagsProps) => JSX.Element;
export interface TagItemProps {
  tag: Tag;
  onDelete(): void;
  onUpdate(tag: Tag): void;
}
export declare const TagItem: (props: TagItemProps) => JSX.Element;
