import React from "react";
import { Text, Button, Icon, FlexProps, Column, Row } from "@mpkelly/siam";
import { File } from "../file/File";

export interface TemplateCardProps extends FlexProps {
  template: File;
  onCreate(): void;
}

export const TemplateCard = (props: TemplateCardProps) => {
  const { template, onCreate, ...rest } = props;
  return (
    <Column
      {...rest}
      background="background-light1"
      p="lg"
      width={300}
      height={200}
      mr="lg"
      mb="lg"
      flexShrink={0}
    >
      <Text kind="large">{template.name}</Text>
      <Row mt="auto" gravity="center-start">
        <Icon name="document" />
        <Button labelKey="create" kind="muted" onClick={onCreate} ml="auto" />
      </Row>
    </Column>
  );
};
