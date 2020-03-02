import React from "react";
import { Column, FlexProps } from "udx-react";
import { ImagesIcon, VideosIcon } from "../icons/IconNames";
import { NavItemProps, NavItem } from "../navigation/NavItem";

export interface MediaNavItemsProps extends FlexProps {}

export const MediaNavItems = (props: MediaNavItemsProps) => {
  return <Column {...props}>{MediaItems.map(NavItem)}</Column>;
};

export const MediaItems: NavItemProps[] = [
  {
    icon: ImagesIcon,
    labelKey: "images",
    path: "/media/images"
  },
  {
    icon: VideosIcon,
    labelKey: "videos",
    path: "/media/videos"
  }
];
