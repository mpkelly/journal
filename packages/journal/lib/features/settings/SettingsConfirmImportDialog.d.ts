import { FlexProps } from "@mpkelly/siam";
export interface SettingsConfirmImportDialogProps extends FlexProps {
    onCancel(): void;
    onConfirm(): void;
}
export declare const SettingsConfirmImportDialog: (props: SettingsConfirmImportDialogProps) => JSX.Element;
