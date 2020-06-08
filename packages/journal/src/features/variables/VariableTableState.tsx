import { useEffect } from "react";
import constate from "constate";
import useArray from "react-hanger/array/useArray";
import useBoolean from "react-hanger/useBoolean";
import { Variable, VariableType, createVariable } from "./Variable";
import { useDatabase } from "../database/DatabaseState";

export const variableTableState = () => {
  const [variables, variableActions] = useArray<Variable>([]);
  const showCreate = useBoolean(false);

  const db = useDatabase();

  const loadVariables = () => db.getVariables().then(variableActions.setValue);

  useEffect(() => {
    loadVariables();
  }, []);

  const handleCreateVariable = (part: Partial<Variable>) => {
    const variable = createVariable(
      part.name as string,
      VariableType.Counter,
      part.count
    );
    db.addVariable(variable).then(showCreate.toggle).then(loadVariables);
  };

  const handleDelete = (variable: Variable) => {
    db.deleteVariable(variable.id).then(loadVariables);
  };

  return { variables, showCreate, handleCreateVariable, handleDelete };
};

export const [VariableTableStateProvider, useVariableTableState] = constate(
  variableTableState
);
