import React from "react";
import { Column, FlexProps } from "@mpkelly/siam";
import { NavItemProps, NavItem } from "../navigation/NavItem";

export interface MediaNavItemsProps extends FlexProps {}

export const MediaNavItemsView = (props: MediaNavItemsProps) => {
  return <Column {...props}>{MediaItems.map(NavItem)}</Column>;
};

export const MediaItems: NavItemProps[] = [
  {
    icon: "images",
    labelKey: "images",
    path: "/media/images",
    type: "images",
  },
  {
    icon: "images",
    labelKey: "videos",
    path: "/media/videos",
    type: "videos",
  },
];
