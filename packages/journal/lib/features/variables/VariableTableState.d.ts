/// <reference types="react" />
import { Variable } from "./Variable";
export declare const variableTableState: () => {
    variables: Variable[];
    showCreate: import("react-hanger/useBoolean").UseBoolean;
    handleCreateVariable: (part: Partial<Variable>) => void;
    handleDelete: (variable: Variable) => void;
};
export declare const VariableTableStateProvider: import("react").FunctionComponent<unknown>, useVariableTableState: import("constate/dist/ts/src/types").ContextHookFunction<{
    variables: Variable[];
    showCreate: import("react-hanger/useBoolean").UseBoolean;
    handleCreateVariable: (part: Partial<Variable>) => void;
    handleDelete: (variable: Variable) => void;
}>;
