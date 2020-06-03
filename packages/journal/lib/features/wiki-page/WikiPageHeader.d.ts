import { FlexProps } from "@mpkelly/siam";
export interface WikiPageHeaderProps extends FlexProps {
    onToggleLocked(): void;
}
export declare const WikiPageHeader: (props: WikiPageHeaderProps) => JSX.Element;
