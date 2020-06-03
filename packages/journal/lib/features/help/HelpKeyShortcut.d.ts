import { FlexProps } from "@mpkelly/siam";
export interface KeyShortcutProps extends FlexProps {
    labelKey: string;
    shortcut: string;
}
export declare const KeyShortcut: (props: KeyShortcutProps) => JSX.Element;
