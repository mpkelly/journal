import { FlexProps } from "@mpkelly/siam";
import { Variable } from "./Variable";
export interface VariableTableRowProps extends FlexProps {
    variable: Variable;
}
export declare const VariableTableRow: (props: VariableTableRowProps) => JSX.Element;
