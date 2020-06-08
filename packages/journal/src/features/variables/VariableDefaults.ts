import { Variable, VariableType } from "./Variable";

export const VariableDefaults: Variable[] = [
  {
    id: "date-today",
    name: "date-today",
    type: VariableType.Date,
    parameters: ["day offset"],
    patterns: ["{{date-today offset}}", "{{today offset}}"],
  },
  {
    id: "datetime-today",
    name: "datetime-today",
    type: VariableType.Date,
    parameters: ["day offset"],
    patterns: ["{{datetime-today offset}}"],
  },
  {
    id: "date-lastdayofmonth",
    name: "date-lastdayofmonth",
    type: VariableType.Date,
    parameters: ["month offset"],
    patterns: ["{{date-lastdayofmonth offset}}", "{{ldom offset}}"],
  },
  {
    id: "date-firstdayofmonth",
    name: "date-firstdayofmonth",
    type: VariableType.Date,
    parameters: ["month offset"],
    patterns: ["{{date-firstdayofmonth offset}}", "{{fdom offset}}"],
  },
  {
    id: "example-counter",
    name: "example count",
    type: VariableType.Counter,
    count: 1000,
    parameters: [],
    patterns: ["{{example-counter}}"],
    userCreated: true,
  },
];
