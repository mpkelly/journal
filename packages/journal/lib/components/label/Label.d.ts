import { TextProps } from "@mpkelly/siam";
export interface LabelProps extends TextProps {
    onDelete(): void;
}
export declare const Label: (props: LabelProps) => JSX.Element;
