import React, { Fragment } from "react";
import { Text, Input, FlexProps, Column, Row, Button } from "@mpkelly/siam";
import { useTemplatePageCreateDialogState } from "./TemplatePageCreateDialogState";

export interface TemplatePageCreateDialogSubstitutionsTabProps
  extends FlexProps {}

export const TemplatePageCreateDialogSubstitutionsTab = () => {
  const {
    substitutions,
    handleSubstitutionChange,
    handleCancelCreate,
    handleConfirmCreate,
  } = useTemplatePageCreateDialogState();
  return (
    <Fragment>
      <Text kind="label" labelKey="substitutions" mb="sm" />
      <Column width="100%" overflowY="auto">
        {substitutions.map((substitution, index) => (
          <TemplateSubstition
            {...substitution}
            key={substitution.name}
            onChange={(value) => handleSubstitutionChange(index, value)}
          />
        ))}
      </Column>
      <Row mt="xl">
        <Button kind="text" labelKey="cancel" onClick={handleCancelCreate} />
        <Button
          labelKey="create"
          ml="auto"
          onClick={handleConfirmCreate}
          data-test="create-template"
        />
      </Row>
    </Fragment>
  );
};

export interface TemplateSubstitionProps {
  name: string;
  value: string;
  onChange(value: string): void;
}

export const TemplateSubstition = (props: TemplateSubstitionProps) => {
  const { name, value, onChange } = props;
  return (
    <Row gravity="center-start" my="sm">
      <Text width={150}>
        <code>{name}</code>
      </Text>
      <Input
        placeholderKey="enterValue"
        value={value}
        flexGrow={1}
        onChange={onChange}
      />
    </Row>
  );
};
