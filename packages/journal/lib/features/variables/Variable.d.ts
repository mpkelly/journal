import { Substitution } from "../substitution/Substitution";
export interface Variable {
    id?: string;
    name: string;
    parameters: string[];
    patterns: string[];
    type: VariableType;
    userCreated?: boolean;
    count?: number;
}
export declare enum VariableType {
    Counter = 0,
    Date = 1,
    Text = 2
}
export declare const createVariable: (name: string, type: VariableType, count?: number) => {
    id: string;
    name: string;
    patterns: string[];
    userCreated: boolean;
    parameters: any[];
    type: VariableType;
    count: number;
};
export declare const evaluateVariable: (variable: Variable, parameter?: any) => string | number;
export declare const createRegex: (name: string) => RegExp;
export declare const createRegexWithOffset: (name: string) => RegExp;
export declare const namesFromPatterns: (patterns: string[]) => string[];
export declare const findVariables: (text: string, variables: Variable[]) => Substitution[];
