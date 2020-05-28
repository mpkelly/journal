import { FlexProps } from "@mpkelly/siam";
export interface DeleteDialogProps extends FlexProps {
    onDelete(): void;
    onCancel(): void;
}
export declare const DeleteDialog: (props: DeleteDialogProps) => JSX.Element;
