import React, { Fragment } from "react";
import { Text, Icon, FlexProps, Column, Row } from "@mpkelly/siam";
import {
  useTemplatePageCreateDialogState,
  Tabs,
} from "./TemplatePageCreateDialogState";
import { TemplatePageCreateDialogFileInfoTab } from "./TemplatePageCreateDialogFileInfoTab";
import { TemplatePageCreateDialogSubstitutionsTab } from "./TemplatePageCreateDialogSubstitutionsTab";

export interface TemplatePageCreateDialogProps extends FlexProps {}

export const TemplatePageCreateDialog = (
  props: TemplatePageCreateDialogProps
) => {
  const { tab } = useTemplatePageCreateDialogState();
  const renderTab = () => {
    switch (tab) {
      case Tabs.FileInfo:
        return <TemplatePageCreateDialogFileInfoTab />;
      case Tabs.Substitutions:
        return <TemplatePageCreateDialogSubstitutionsTab />;
    }
  };
  return (
    <Fragment {...props}>
      <Row gravity="center-start">
        <Icon name="template" />
        <Text kind="large" labelKey="createFile" ml="md" />
      </Row>
      <Column mt="xl" overflow="hidden">
        {renderTab()}
      </Column>
    </Fragment>
  );
};
