import { FlexProps } from "@mpkelly/siam";
import { TextStyle } from "./PdfPrintStyles";
export interface PdfTextStylesProps extends FlexProps {
    styles: Map<string, TextStyle>;
    onChange(name: string, property: keyof TextStyle, value: any): void;
}
export declare const PdfTextStyles: (props: PdfTextStylesProps) => JSX.Element;
