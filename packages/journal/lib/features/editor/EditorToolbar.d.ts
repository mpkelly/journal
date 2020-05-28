import { FlexProps } from "@mpkelly/siam";
export interface EditorToolbarProps extends FlexProps {
    saved: boolean;
    onToggleLocked(): void;
    onSave(): void;
    readOnly?: boolean;
    children?: JSX.Element | JSX.Element[];
}
export declare const EditorToolbar: (props: EditorToolbarProps) => JSX.Element;
