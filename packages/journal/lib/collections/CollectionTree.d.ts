import { Item } from "../content/Item";
export interface FileTreeProps {
    items: Item[];
    id: any;
}
export declare const CollectionTree: (props: FileTreeProps) => JSX.Element;
