import { FlexProps } from "@mpkelly/siam";
export interface OverlayProps extends FlexProps {
  children?: any;
  onClick(event: any): any;
}
export declare const Overlay: (props: OverlayProps) => JSX.Element;
