import { Substitution, SubstitutionType } from "../substitution/Substitution";
import { newId } from "../../util/Identity";

export interface Variable {
  id?: string;
  name: string;
  parameters: string[];
  patterns: string[];
  type: VariableType;
  userCreated?: boolean;
  count?: number;
}

export enum VariableType {
  Counter,
  Date,
  Text,
}

export const createVariable = (
  name: string,
  type: VariableType,
  count?: number
) => {
  return {
    id: newId(),
    name,
    patterns: [`{{${name}}}`],
    userCreated: true,
    parameters: [],
    type,
    count,
  };
};

export const evaluateVariable = (variable: Variable, parameter: any = 0) => {
  switch (variable.name) {
    case "date-today":
      return today(parameter).toLocaleDateString();
    case "datetime-today":
      return today(parameter).toLocaleString();
    case "date-lastdayofmonth":
      return lastDayOfMonth(parameter).toLocaleDateString();
    case "date-firstdayofmonth":
      return fisrtDayOfMonth(parameter).toLocaleDateString();
    default:
      return variable.count as number;
  }
};

const today = (offsetDays: any) => {
  const date = new Date();
  date.setDate(date.getDate() + Number(offsetDays));
  return date;
};

const lastDayOfMonth = (offsetMonth: any) => {
  var today = new Date();
  const date = new Date(
    today.getFullYear(),
    today.getMonth() + 1 + Number(offsetMonth),
    0
  );
  return date;
};

const fisrtDayOfMonth = (offsetMonth: any) => {
  var today = new Date();
  const date = new Date(
    today.getFullYear(),
    today.getMonth() + Number(offsetMonth),
    1
  );
  return date;
};

export const createRegex = (name: string) => new RegExp(`\{\{${name}\}\}`, "g");
export const createRegexWithOffset = (name: string) =>
  new RegExp(`\{\{${name}( -?\\d+)?\}\}`, "g");

export const namesFromPatterns = (patterns: string[]) => {
  return patterns.map(
    (pattern) => pattern.substring(2, pattern.length - 2).split(" ")[0]
  );
};

export const findVariables = (
  text: string,
  variables: Variable[]
): Substitution[] => {
  const result = new Map<string, { value: any; variable: Variable }>();
  variables.forEach((variable) => {
    namesFromPatterns(variable.patterns).forEach((name) => {
      let regex = createRegex(name);
      const match = text.match(regex);
      if (match) {
        const variableValue = evaluateVariable(variable);
        const value = { value: variableValue, variable };
        result.set(match[0], value);
        text = text.split(match[0]).join("");
      }
      if (variable.parameters.length) {
        regex = createRegexWithOffset(name);
        const match = regex.exec(text);
        if (match) {
          const variableValue = evaluateVariable(
            variable,
            Number(match[1].trim())
          );
          const value = { value: variableValue, variable };
          result.set(match[0], value);
        }
      }
    });
  });

  return Array.from(result.keys()).map((name) => {
    const value = result.get(name);
    return {
      name,
      value: value?.value,
      type: SubstitutionType.Variable,
      variable: value?.variable,
    };
  });
};
