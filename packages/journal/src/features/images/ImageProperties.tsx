import React from "react";
import {
  Text,
  Input,
  Label,
  Icon,
  FlexProps,
  Column,
  Row,
} from "@mpkelly/siam";
import { Media } from "../media/Media";
import { Divider } from "../../components/divider/Divider";
import { useImagePropertiesState } from "./ImagePropertiesState";

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
      />
      <Row flexWrap="wrap">
        {image.tags.map((tag) => (
          <Label key={tag} mr="md" mb="md">
            {tag}
          </Label>
        ))}
      </Row>
      <Divider my="sm" />
      <Text labelKey="properties" kind="label" mt="md" />
    </Column>
  );
};
