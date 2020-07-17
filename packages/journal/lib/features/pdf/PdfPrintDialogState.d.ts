import { Node } from "@mpkelly/react-editor-kit";
import { PrintStyle, TextStyle } from "./PdfPrintStyles";
export declare const usePdfPrintDailogState: (nodes: Node[], onClose: () => void) => {
    preview: string;
    handlePrint: () => void;
    printStyle: PrintStyle;
    handleStyleChange: (property: keyof PrintStyle, value: any) => void;
    handleTextStyleChange: (name: string, property: keyof TextStyle, value: any) => void;
};
