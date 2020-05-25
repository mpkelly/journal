export interface Variable {
  id?: string;
  name: string;
  type: VariableType;
}

export enum VariableType {
  Counter,
  Date,
  Text,
}
