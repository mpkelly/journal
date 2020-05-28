import { FlexProps } from "@mpkelly/siam";
import { CodeFile } from "../code-editor/CodeFile";
export interface CodePageTableRowProps extends FlexProps {
    codeFile: CodeFile;
}
export declare const CodePageTableRow: (props: CodePageTableRowProps) => JSX.Element;
