import { ReactNode } from "react";
import { ElementProps } from "@mpkelly/siam";
export interface NavItemProps extends ElementProps<any> {
    icon: string;
    labelKey: string;
    path: string;
    type: string;
    children?: ReactNode;
    rightContent?: ReactNode;
}
export declare const NavItem: (props: NavItemProps) => JSX.Element;
