import React from "react";
import { Text, Icon, FlexProps, Show } from "@mpkelly/siam";
import { Variable, evaluateVariable } from "./Variable";
import { useVariableTableState } from "./VariableTableState";

export interface VariableTableRowProps extends FlexProps {
  variable: Variable;
}

export const VariableTableRow = (props: VariableTableRowProps) => {
  const { variable } = props;
  const { handleDelete } = useVariableTableState();
  return (
    <tr className="row" key={variable.id}>
      <td className="cell">
        <Text>{variable.name}</Text>
      </td>
      <td className="cell">
        <Text color="secondary.text">{variable.parameters.join(", ")}</Text>
      </td>
      <td className="cell">
        <Text color="secondary.text">
          <code>{variable.patterns.join(", ")}</code>
        </Text>
      </td>
      <td className="cell">
        <Text color="secondary.text">{evaluateVariable(variable)}</Text>
      </td>
      <td className="cell">
        <Show when={variable.userCreated}>
          <Icon
            kind="small.button"
            name="delete"
            onClick={() => handleDelete(variable)}
          />
        </Show>
      </td>
    </tr>
  );
};
