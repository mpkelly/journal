import React from "react";
import { FlexProps } from "@mpkelly/siam";
import { NavItemView } from "../navigation/NavItemView";

export interface SettingsNavProps extends FlexProps {}

export const SettingsNav = (props: SettingsNavProps) => {
  return (
    <NavItemView
      icon={"settings"}
      labelKey={"configure"}
      path={"/settings/general"}
      type={"settings"}
      {...props}
    />
  );
};
