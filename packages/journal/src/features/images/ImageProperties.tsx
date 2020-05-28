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

export interface ImagePropertiesProps extends FlexProps {
  image: Media;
}

export const ImageProperties = (props: ImagePropertiesProps) => {
  const { image, ...rest } = props;
  return (
    <Column
      width={240}
      flexShrink={0}
      background="background"
      height="100%"
      {...rest}
    >
      <Row gravity="center-start" mb="lg">
        <Icon name="info" mr="md" />
        <Text labelKey="Image Details" />
      </Row>
      <Input
        labelKey="name"
        value={image.name}
        onChange={console.log}
        my={"md"}
      />
      <Input
        labelKey="addNewTags"
        value={""}
        placeholder="add new tags here and hit enter"
        onChange={console.log}
        my={"md"}
      />
      <Row flexWrap="wrap">
        <Label mr="md" mb="md">
          sport
        </Label>
        <Label mr="md" mb="md">
          economics
        </Label>
        <Label mr="md" mb="md">
          things
        </Label>
        <Label mr="md" mb="md">
          great
        </Label>
        <Label mr="md" mb="md">
          stuff
        </Label>
        <Label mr="md" mb="md">
          here
        </Label>
        <Label mr="md" mb="md">
          sport
        </Label>
        <Label mr="md" mb="md">
          economics
        </Label>
        <Label mr="md" mb="md">
          things
        </Label>
        <Label mr="md" mb="md">
          great
        </Label>
        <Label mr="md" mb="md">
          stuff
        </Label>
        <Label mr="md" mb="md">
          here
        </Label>
      </Row>
      <Divider my="sm" />
      <Text labelKey="properties" kind="label" mt="md" />
    </Column>
  );
};
