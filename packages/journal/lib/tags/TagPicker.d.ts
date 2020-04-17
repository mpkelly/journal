import { FlexProps } from "udx-react";
export interface TagPickerProps extends FlexProps {
    selectedTags: number[];
    onTagsChange(tags: number[]): void;
}
export declare const TagPicker: (props: TagPickerProps) => JSX.Element;
