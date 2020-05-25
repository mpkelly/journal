import React from "react";
import { FlexProps, Column, Text, Row, Icon } from "@mpkelly/siam";
import { Page } from "../page/Page";
import { useTemplatePageState } from "./TemplatePageState";
import { TemplateCard } from "../template/TemplateCard";

export interface TemplatePageProps extends FlexProps {}

export const TemplatePage = (props: TemplatePageProps) => {
  const { ...rest } = props;
  const { templates, handleCreate } = useTemplatePageState();
  return (
    <Page {...rest}>
      <Column size="100%" p="lg">
        <Row gravity="center-start">
          <Icon name={"template"} kind="large" mr="md" color="accent" />
          <Text kind="large" labelKey="templates" />
        </Row>
        <Row
          flexWrap="wrap"
          mt="xxl"
          width="100%"
          flexGrow={1}
          alignContent="flex-start"
        >
          {templates.map((template) => {
            return (
              <TemplateCard
                template={template}
                onCreate={() => handleCreate(template)}
                key={template.id}
              />
            );
          })}
        </Row>
      </Column>
    </Page>
  );
};
