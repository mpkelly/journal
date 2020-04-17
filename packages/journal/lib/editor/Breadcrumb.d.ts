import { Item } from "../content/Item";
import { Collection } from "../collections/Collection";
export interface BreadcrumbProps {
    collection: Collection;
    item: Item;
}
export declare const Breadcrumb: (props: BreadcrumbProps) => JSX.Element;
