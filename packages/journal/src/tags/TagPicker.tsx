import React from "react";
import { FlexProps, Row } from "udx-react";
import { useTags } from "./TagContext";
import { TagIndicator } from "./TagIndicator";

export interface TagPickerProps extends FlexProps {
  selectedTags: number[];
  onTagsChange(tags: number[]): void;
}

export const TagPicker = (props: TagPickerProps) => {
  const { selectedTags, onTagsChange, ...rest } = props;
  const { tags } = useTags();
  const toggleSelected = (id: number) => {
    const next = selectedTags.slice();
    if (next.includes(id)) {
      next.splice(next.indexOf(id));
    } else {
      next.push(id);
    }
    onTagsChange(next);
  };
  return (
    <Row
      alignItems="flex-start"
      alignContent="flex-start"
      flexWrap="wrap"
      boxShadow={0}
      borderRadius={"sm"}
      p="sm"
      {...rest}
    >
      {tags.map(tag => {
        const variant = selectedTags.includes(tag.id) ? "tag" : "muted";
        return (
          <TagIndicator
            mr="sm"
            mb="sm"
            onClick={() => toggleSelected(tag.id)}
            variant={variant}
            tag={tag}
            key={tag.id}
          />
        );
      })}
    </Row>
  );
};
