import { FlexProps } from "@mpkelly/siam";
export interface DropdownProps extends FlexProps {
    value: string;
    items: string[];
    onChange(value: string): void;
}
export declare const Dropdown: (props: DropdownProps) => JSX.Element;
