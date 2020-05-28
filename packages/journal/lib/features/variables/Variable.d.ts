export interface Variable {
    id?: string;
    name: string;
    type: VariableType;
}
export declare enum VariableType {
    Counter = 0,
    Date = 1,
    Text = 2
}
