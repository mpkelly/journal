import { FlexProps } from "@mpkelly/siam";
export interface MarginPickerProps extends FlexProps {
    margin: number[];
    onChange(margin: number[]): void;
}
export declare const MarginPicker: (props: MarginPickerProps) => JSX.Element;
