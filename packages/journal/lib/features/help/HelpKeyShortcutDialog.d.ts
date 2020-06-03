import { FlexProps } from "@mpkelly/siam";
export interface HelpKeyShortcutDialogProps extends FlexProps {
    titleLabelKey: string;
    onClose(): void;
}
export declare const HelpKeyShortcutDialog: (props: HelpKeyShortcutDialogProps) => JSX.Element;
