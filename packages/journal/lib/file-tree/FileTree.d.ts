import { Item } from "../content/Item";
export interface FileTreeProps {
    items: Item[];
    id: any;
    renderItem(props: any): any;
    onChange(items: Item[]): void;
}
export declare const FileTree: (props: FileTreeProps) => JSX.Element;
export declare const isParentCollapsed: (path: number[], items: Item[]) => boolean;
