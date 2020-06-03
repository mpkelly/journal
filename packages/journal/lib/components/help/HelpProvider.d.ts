import { HelpProps, HelpTab } from "./Help";
import { ReactNode, FC, CSSProperties } from "react";
export interface HelpState {
    playbackRate: number;
    currentTab: HelpTab;
    tabIndex: number;
    totalTabs: number;
    hasNext: boolean;
    handleNext(): void;
    hasPrevious: boolean;
    handlePrevious(): void;
    handleSkip(): void;
    currentUrl: string;
    width?: number | string;
    height?: number | string;
    style?: CSSProperties;
    videoHeight?: number | string;
    videoWidth?: number | string;
}
export declare const useHelpState: () => HelpState;
declare type HelpProviderProps = HelpProps & {
    children: ReactNode;
};
export declare const HelpProvider: FC<HelpProviderProps>;
export {};
