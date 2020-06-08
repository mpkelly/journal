import { Variable } from "./Variable";
export declare const useVariableCreateDialogState: () => {
    variable: {
        name: string;
        count: number;
    };
    handleVariableChange: (property: keyof Variable, value: any) => void;
    canSave: boolean;
};
