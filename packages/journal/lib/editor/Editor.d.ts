import { Node } from "slate";
export interface EditorProps {
    readOnly?: boolean;
    onChange(value: Node[]): void;
    value: Node[];
}
export declare const Editor: (props: EditorProps) => JSX.Element;
