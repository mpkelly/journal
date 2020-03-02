import React from "react";
import { Label, FlexProps, EditableText, Icon, styled } from "udx-react";
import { Tag } from "./Tag";
import { Show } from "../util/Show";
import { ClearIcon } from "../icons/IconNames";

export interface TagIndicatorProps extends FlexProps {
  tag: Tag;
  onUpdate?(tag: Tag): void;
  onDelete?(): void;
}

export const TagIndicator = (props: TagIndicatorProps) => {
  const { tag, onUpdate, onDelete, ...rest } = props;
  const { name } = tag;
  const canDelete = Boolean(onDelete);
  const cursor = props.onClick ? "pointer" : undefined;
  return (
    <Label variant={"tag"} display={"inline-flex"} cursor={cursor} {...rest}>
      <StyledText
        value={name}
        color={"inherit"}
        fontWeight={"inherit"}
        fontSize={"inherit"}
        disabled={!Boolean(onUpdate)}
        onSave={value => {
          tag.name = value;
          onUpdate && onUpdate(tag);
        }}
      />
      <Show when={canDelete}>
        <Icon
          name={ClearIcon}
          variant="small"
          color={"secondaryText"}
          ml="sm"
          cursor={"pointer"}
          onClick={() => onDelete && onDelete()}
        />
      </Show>
    </Label>
  );
};

const StyledText = styled(EditableText)`
  white-space: nowrap;
`;
