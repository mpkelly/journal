import React from "react";
import { useHelpState, HelpState } from "./HelpProvider";

export const HelpCard = () => {
  const {
    currentTab,
    height,
    width,
    videoWidth,
    videoHeight,
    playbackRate,
    style,
  } = useHelpState() as HelpState;
  const handleRef = (video: HTMLVideoElement | null) => {
    if (video) {
      video.playbackRate = playbackRate;
    }
  };
  const additionalStyle = style || {};
  return (
    <div
      key={currentTab.url}
      style={{
        display: "flex",
        flexDirection: "column",
        width,
        height,
        ...additionalStyle,
      }}
    >
      <video
        width={videoWidth}
        height={videoHeight}
        autoPlay
        loop
        ref={handleRef}
      >
        <source src={currentTab.url} />
      </video>
      {currentTab.content}
    </div>
  );
};
