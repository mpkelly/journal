import React from "react";
import { FlexProps } from "@mpkelly/siam";
import { NavItem } from "../navigation/NavItem";

export interface SettingsNavProps extends FlexProps {}

export const SettingsNav = (props: SettingsNavProps) => {
  return (
    <NavItem
      icon={"settings"}
      labelKey={"configure"}
      path={"/settings/general"}
      type={"settings"}
      {...props}
    />
  );
};
