import React from "react";
import { FlexProps, Row } from "@mpkelly/siam";
import { useTemplateGridState } from "./TemplateGridState";
import { TemplateCard } from "../template/TemplateCard";
import { File } from "../file/File";
import { EmptyView } from "../media/EmptyView";

export interface TemplateGridProps extends FlexProps {
  onCreate(template: File): void;
}

export const TemplateGrid = (props: TemplateGridProps) => {
  const { onCreate } = props;
  const { templates, handleDelete, handleRename } = useTemplateGridState();
  if (!templates.length) {
    return <EmptyView labelKey="noTemplates" icon="template" mt="xxl" />;
  }
  return (
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
            onCreate={() => onCreate(template)}
            onDelete={() => handleDelete(template.id)}
            onRename={(name) => handleRename(template.id, name)}
            key={template.id}
          />
        );
      })}
    </Row>
  );
};
