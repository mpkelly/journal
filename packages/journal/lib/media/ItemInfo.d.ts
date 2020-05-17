import React from "react";
import { FlexProps } from "@mpkelly/siam";
import { Media } from "./MediaDatabase";
export interface ItemInfoProps extends FlexProps {
  media: Media;
}
export declare const ItemInfo: React.MemoExoticComponent<(
  props: ItemInfoProps
) => JSX.Element>;
