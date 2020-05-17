import React from "react";
import { Column, FlexProps } from "@mpkelly/siam";
import { NavItemViewProps, NavItemView } from "../navigation/NavItemView";

export interface SettingsNavProps extends FlexProps {}

export const SettingsNav = (props: SettingsNavProps) => {
  return <Column {...props}>{SettingsItem.map(NavItemView)}</Column>;
};

export const SettingsItem: NavItemViewProps[] = [
  {
    icon: "settings",
    labelKey: "general",
    path: "/settings/general",
    type: "settings",
  },
];
