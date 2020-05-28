import { FlexProps } from "@mpkelly/siam";
export interface ColorPickerProps extends FlexProps {
    selectedColor: string;
    onColorChange(color: string): any;
    onClose(): any;
}
export declare const ColorPicker: (props: ColorPickerProps) => JSX.Element;
export declare const Colors: string[];
export declare const ExtendedColors: string[];
