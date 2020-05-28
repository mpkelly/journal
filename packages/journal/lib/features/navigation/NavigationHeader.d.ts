import { FlexProps } from "@mpkelly/siam";
export interface NavigationHeaderProps extends FlexProps {
    collapsed: boolean;
    onToggleCollapsed(): void;
}
export declare const NavigationHeader: (props: NavigationHeaderProps) => JSX.Element;
