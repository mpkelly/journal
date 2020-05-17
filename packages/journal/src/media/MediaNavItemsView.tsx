import React from "react";
import { Column, FlexProps } from "@mpkelly/siam";
import { NavItemViewProps, NavItemView } from "../navigation/NavItemView";

export interface MediaNavItemsProps extends FlexProps {}

export const MediaNavItemsView = (props: MediaNavItemsProps) => {
  return <Column {...props}>{MediaItems.map(NavItemView)}</Column>;
};

export const MediaItems: NavItemViewProps[] = [
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
