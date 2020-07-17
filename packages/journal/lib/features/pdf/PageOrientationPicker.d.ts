import { FlexProps } from "@mpkelly/siam";
export interface PageOrientationPickerProps extends FlexProps {
    value: string;
    onChange(pageSize: string): void;
}
export declare const PageOrientationPicker: (props: PageOrientationPickerProps) => JSX.Element;
