import { FlexProps } from "@mpkelly/siam";
export interface FontPickerProps extends FlexProps {
    value: string;
    onChange(pageSize: string): void;
}
export declare const FontPicker: (props: FontPickerProps) => JSX.Element;
