import React from "react";
import { Text, Input, Icon, FlexProps, Column, Row } from "@mpkelly/siam";
import { Media } from "../media/Media";
import { Divider } from "../../components/divider/Divider";
import { useImagePropertiesState } from "./ImagePropertiesState";
import { Label } from "../../components/label/Label";
import { Show } from "../../util/Show";

export interface ImagePropertiesProps extends FlexProps {
  image: Media;
  onChange(image: Media): void;
}

export const ImageProperties = (props: ImagePropertiesProps) => {
  const { image, onChange, ...rest } = props;
  const {
    handleChange,
    handleKey,
    handleTagsChange,
    handleDeleteTag,
    tag,
  } = useImagePropertiesState({
    image,
    onChange,
  });
  return (
    <Column width={240} flexShrink={0} background="background" {...rest}>
      <Row gravity="center-start" mb="lg">
        <Icon name="info" mr="md" />
        <Text labelKey="Image Details" />
      </Row>
      <Input
        labelKey="name"
        value={image.name}
        data-test="name-input"
        onChange={(name: string) => handleChange({ name })}
        my={"md"}
      />
      <Input
        my={"md"}
        labelKey="addNewTags"
        placeholder="tag1, tag2 etc enter to save"
        {...tag.valueBind}
        onKeyDown={handleKey}
        onBlur={handleTagsChange}
        data-test="tag-input"
      />
      <Row flexWrap="wrap">
        {image.tags.map((tag) => (
          <Label
            key={tag}
            mr="md"
            mb="md"
            onDelete={() => handleDeleteTag(tag)}
          >
            {tag}
          </Label>
        ))}
      </Row>
      <Divider my="sm" />
      <ImageProperty labelKey="type" value={image.extension} mt="md" />
      <Show when={image.width !== undefined}>
        <ImageProperty labelKey="width" value={`${image.width}px`} />
      </Show>
      <Show when={image.height !== undefined}>
        <ImageProperty labelKey="height" value={`${image.height}px`} />
      </Show>
      <ImageProperty labelKey="created" value={image.created} />
      <ImageProperty labelKey="modified" value={image.modified} />
    </Column>
  );
};

interface ImageProperty extends FlexProps {
  labelKey: string;
  value: any;
}

const ImageProperty = (props: ImageProperty) => {
  const { labelKey, value, ...rest } = props;
  return (
    <Row gravity="center-start" mb="md" {...rest}>
      <Text kind="label" mb={0} width={100} labelKey={labelKey} />
      <Text kind="small" labelKey="" flexGrow={1} textAlign="right">
        {value}
      </Text>
    </Row>
  );
};
