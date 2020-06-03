import { ReactNode, CSSProperties } from "react";
export interface HelpProps {
    playbackRate?: number;
    tabs: HelpTab[];
    onComplete(): void;
    onSkipped?(): void;
    width?: number | string;
    height?: number | string;
    style?: CSSProperties;
    videoHeight?: number | string;
    videoWidth?: number | string;
}
export interface HelpTab {
    url: string;
    content?: ReactNode;
}
export declare const Help: (props: HelpProps) => JSX.Element;
