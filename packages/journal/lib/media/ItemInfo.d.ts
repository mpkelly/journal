import React from "react";
import { FlexProps } from "udx-react";
import { Media } from "./MediaDatabase";
export interface ItemInfoProps extends FlexProps {
    media: Media;
}
export declare const ItemInfo: React.MemoExoticComponent<(props: ItemInfoProps) => JSX.Element>;
