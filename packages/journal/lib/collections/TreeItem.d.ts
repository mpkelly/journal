import React from "react";
import { FlexProps } from "@mpkelly/siam";
import { OverflowItem } from "../menu/OverflowMenu";
import { CSSProperties } from "react";
export interface TreeItemProps {
  items?: OverflowItem[];
  collectionId: number;
  id: string;
  name: string;
  style: CSSProperties;
  collapsed?: boolean;
  iconProps?: FlexProps;
  onClick: (event: any) => any;
  icon: string;
  color?: any;
  type?: string;
}
export declare const TreeItem: React.MemoExoticComponent<(
  props: TreeItemProps
) => JSX.Element>;
