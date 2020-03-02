import React from "react";
import { Tag } from "./Tag";
import { Section, Row, Text, FlexProps, styled, Checkbox } from "udx-react";
import { DeleteIcon, AddIcon } from "../icons/IconNames";
import { IconButton } from "../icons/IconButton";
import { TagIndicator } from "./TagIndicator";
import { useTags } from "./TagContext";

export interface TagsProps extends FlexProps {}

export const Tags = (props: TagsProps) => {
  const { ...rest } = props;
  const { tags, addTag, deleteTag, updateTag } = useTags();

  return (
    <Section flexDirection="column" {...rest}>
      <Row alignItems="center" mt="xl" mb="md">
        <Text variant="label" labelKey="tags" m={0} />
        <IconButton
          buttonProps={{ ml: "auto", color: "primaryText" }}
          name={AddIcon}
          variant="small"
          onClick={addTag}
        />
      </Row>

      {tags.map(tag => (
        <TagItem
          tag={tag}
          onDelete={() => deleteTag(tag)}
          onUpdate={tag => updateTag(tag)}
        />
      ))}
    </Section>
  );
};

export interface TagItemProps {
  tag: Tag;
  onDelete(): void;
  onUpdate(tag: Tag): void;
}

export const TagItem = (props: TagItemProps) => {
  const { selected, toggleSelected } = useTags();
  const { onDelete, onUpdate, tag } = props;
  return (
    <StyledTagItem alignItems="center" width="100%" height={30}>
      <Checkbox
        checked={selected.includes(tag.id as number)}
        onChange={() => toggleSelected(tag.id as number)}
        mr={"sm"}
      />
      <TagIndicator tag={tag} onUpdate={tag => onUpdate(tag)} />

      <Row ml="auto" className="toolbar">
        <IconButton
          buttonProps={{ ml: "sm" }}
          name={DeleteIcon}
          variant="small"
          color={"primaryText"}
          onClick={onDelete}
        />
      </Row>
    </StyledTagItem>
  );
};

const StyledTagItem = styled(Row)`
  .toolbar {
    display: none;
  }
  :hover {
    .toolbar {
      display: flex;
    }
  }
`;
