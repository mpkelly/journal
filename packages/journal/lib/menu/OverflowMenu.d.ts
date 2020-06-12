import { FlexProps } from "@mpkelly/siam";
export interface OverflowMenuProps extends FlexProps {
  items: OverflowItem[];
}
export interface OverflowItem {
  nameKey: string;
  onClick: (event?: any) => any;
}
export declare const OverflowMenu: (props: OverflowMenuProps) => JSX.Element;