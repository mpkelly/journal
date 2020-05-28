import { FlexProps } from "@mpkelly/siam";
export interface ConfirmDialogViewProps extends FlexProps {
    message?: string;
    messageKey?: string;
    onConfirm(): any;
    onCancel(): any;
    buttonKind?: string;
}
export declare const ConfirmDialogView: (props: ConfirmDialogViewProps) => JSX.Element;
