import { FlexProps } from "@mpkelly/siam";
export interface PageSizePickerProps extends FlexProps {
    value: string;
    onChange(pageSize: string): void;
}
export declare const PageSizePicker: (props: PageSizePickerProps) => JSX.Element;
