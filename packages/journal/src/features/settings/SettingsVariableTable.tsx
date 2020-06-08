import React, { Fragment } from "react";
import { Text, Icon, Column, Row, Scope } from "@mpkelly/siam";
import { useVariableTableState } from "../variables/VariableTableState";
import { VariableTable } from "../variables/VariableTable";
import { Show } from "../../util/Show";
import { VariableCreateDialog } from "../variables/VariableCreateDialog";

export const SettingsVariableTable = () => {
  const { showCreate } = useVariableTableState();
  return (
    <Fragment>
      <Row mt="xl" mb="md">
        <Text kind="label" labelKey="variables" />
        <Icon
          kind="small.button"
          name="add"
          onClick={showCreate.toggle}
          ml="auto"
        />
      </Row>
      <Scope value="nav">
        <Column background="background" p="md">
          <VariableTable />
        </Column>
      </Scope>
      <Show when={showCreate.value}>
        <VariableCreateDialog />
      </Show>
    </Fragment>
  );
};
