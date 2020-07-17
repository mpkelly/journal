import { FlexProps } from "@mpkelly/siam";
import { Node } from "@mpkelly/react-editor-kit";
export interface PdfPrintDialogProps extends FlexProps {
    onClose(): void;
    nodes: Node[];
}
export declare const PdfPrintDialog: (props: PdfPrintDialogProps) => JSX.Element;
