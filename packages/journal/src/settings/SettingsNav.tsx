import React from "react";
import { Column, FlexProps } from "udx-react";
import { SettingsIcon } from "../icons/IconNames";
import { NavItemProps, NavItem } from "../navigation/NavItem";

export interface SettingsNavProps extends FlexProps {}

export const SettingsNav = (props: SettingsNavProps) => {
  return <Column {...props}>{SettingsItem.map(NavItem)}</Column>;
};

export const SettingsItem: NavItemProps[] = [
  {
    icon: SettingsIcon,
    labelKey: "general",
    path: "/settings/general"
  }
];
