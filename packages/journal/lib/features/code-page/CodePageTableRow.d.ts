import { FlexProps } from "@mpkelly/siam";
import { CodeFile } from "../code-editor/CodeFile";
export interface CodePageTableRowProps extends FlexProps {
    codeFile: CodeFile;
    icon: string;
}
export declare const CodePageTableRow: (props: CodePageTableRowProps) => JSX.Element;
