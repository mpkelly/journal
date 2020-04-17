import { FlexProps } from "udx-react";
import { Item } from "../content/Item";
export interface ToolbarProps extends FlexProps {
    collectionId: number;
    item: Item;
    saved: boolean;
    onToggleLocked(): void;
    onSave(): void;
    children?: JSX.Element | JSX.Element[];
}
export declare const Toolbar: (props: ToolbarProps) => JSX.Element;
