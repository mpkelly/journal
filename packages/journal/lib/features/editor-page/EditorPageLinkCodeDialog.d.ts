import { FlexProps } from "@mpkelly/siam";
export interface EditorPageLinkCodeDialogProps extends FlexProps {
    onClose(): void;
    onConfirm(ids: string[]): void;
}
export declare const EditorPageLinkCodeDialog: (props: EditorPageLinkCodeDialogProps) => JSX.Element;
