import { useState } from "react";
import { Variable } from "./Variable";

export const useVariableCreateDialogState = () => {
  const [variable, setVaraible] = useState({ name: "", count: 0 });

  const handleVariableChange = (property: keyof Variable, value: any) => {
    setVaraible((current) => ({ ...current, [property]: value }));
  };

  const canSave = variable.name.trim() && variable.count !== undefined;

  return { variable, handleVariableChange, canSave };
};
