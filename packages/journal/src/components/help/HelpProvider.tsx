import { HelpProps, HelpTab } from "./Help";
import React, {
  useState,
  createContext,
  ReactNode,
  useContext,
  FC,
  CSSProperties,
} from "react";

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

const Context = createContext<HelpState | undefined>(undefined);

export const useHelpState = () => {
  return useContext(Context);
};

type HelpProviderProps = HelpProps & { children: ReactNode };

export const HelpProvider: FC<HelpProviderProps> = (
  props: HelpProviderProps
) => {
  const {
    playbackRate,
    tabs,
    onComplete,
    onSkipped,
    children,
    ...rest
  } = props;

  const [tabIndex, setTabIndex] = useState(0);
  const currentTab = tabs[tabIndex];
  const currentUrl = currentTab.url;
  const hasNext = tabIndex + 1 < tabs.length;
  const hasPrevious = tabIndex > 0;

  const handleNext = () => {
    if (hasNext) {
      setTabIndex((index) => index + 1);
    }
  };

  const handlePrevious = () => {
    if (hasPrevious) {
      setTabIndex((index) => index - 1);
    }
  };

  const handleSkip = () => {
    onSkipped ? onSkipped() : onComplete();
  };

  const value = {
    playbackRate: playbackRate as number,
    tabIndex: tabIndex + 1,
    totalTabs: tabs.length,
    hasNext,
    handleNext,
    hasPrevious,
    handlePrevious,
    handleSkip,
    currentTab,
    currentUrl,
    ...rest,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

HelpProvider.defaultProps = {
  playbackRate: 1,
  height: "auto",
  width: 500,
  videoHeight: "70%",
  videoWidth: "100%",
};
