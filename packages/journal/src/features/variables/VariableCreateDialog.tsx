import React from "react";
import { Text, Button, Input, Icon, Row } from "@mpkelly/siam";
import { useVariableTableState } from "./VariableTableState";
import { Dialog } from "../../components/dialog/Dialog";
import { useVariableCreateDialogState } from "./VariableCreateDialogState";

export const VariableCreateDialog = () => {
  const { showCreate, handleCreateVariable } = useVariableTableState();
  const {
    variable,
    canSave,
    handleVariableChange,
  } = useVariableCreateDialogState();
  return (
    <Dialog onClickOutside={showCreate.toggle}>
      <Row gravity="center-start" mb="md">
        <Icon name="confirm" mr="md" />
        <Text kind="large" labelKey={"createVariable"} />
      </Row>
      <Input
        value={variable.name}
        onChange={(value: true) => handleVariableChange("name", value)}
        labelKey="name"
        mb="md"
      />
      <Input
        value={variable.count}
        onChange={(value: true) => handleVariableChange("count", value)}
        labelKey="initialCount"
        mb="md"
        type="number"
      />
      <Row mt="auto">
        <Button
          kind="text"
          labelKey={"cancel"}
          onClick={showCreate.toggle}
          autoFocus
        />
        <Button
          labelKey={"confirm"}
          disabled={!canSave}
          disabledKind="disabled"
          onClick={() => canSave && handleCreateVariable(variable)}
          ml="auto"
        />
      </Row>
    </Dialog>
  );
};
