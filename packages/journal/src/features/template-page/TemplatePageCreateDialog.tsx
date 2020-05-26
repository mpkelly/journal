import React, { Fragment, useState } from "react";
import {
  Text,
  Icon,
  FlexProps,
  Column,
  Row,
  Input,
  Button,
} from "@mpkelly/siam";
import { File } from "../file/File";
import { Substitution } from "./TemplatePageState";

export interface TemplatePageCreateDialogProps extends FlexProps {
  file: File;
  substitutions: Substitution[];
  onConfirm(substitutions: Substitution[]): void;
  onCancel(): void;
}

export const TemplatePageCreateDialog = (
  props: TemplatePageCreateDialogProps
) => {
  const {
    substitutions: initialSubstitions,
    onConfirm,
    onCancel,
    ...rest
  } = props;
  const [substitutions, setSubstitutions] = useState(initialSubstitions);
  return (
    <Fragment {...rest}>
      <Row gravity="center-start">
        <Icon name="template" />
        <Text kind="large" labelKey="createFile" ml="md" />
      </Row>
      <Column mt="lg">
        <Text kind="small" color="secondary.text" labelKey="substitutions" />
        <Column width="100%" overflowX="auto">
          {substitutions.map((substitution, index) => (
            <TemplateSubstition
              {...substitution}
              key={substitution.name}
              onChange={(value) => {
                setSubstitutions((current) => {
                  const next = current.slice();
                  next[index].value = value;
                  return next;
                });
              }}
            />
          ))}
        </Column>
      </Column>
      <Row mt="lg">
        <Button kind="text" labelKey="cancel" onClick={onCancel} />
        <Button
          labelKey="create"
          ml="auto"
          onClick={() => onConfirm(substitutions)}
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
