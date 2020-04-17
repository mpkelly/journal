import { Media, MediaType } from "./MediaDatabase";
import { MenuItem } from "udx-react";
import { MediaPageProps } from "./MediaPage";
import { FileUpload } from "../upload/Upload";
export interface MediaContextValue {
    items: Media[][];
    sortItems: MenuItem[];
    sortItem: MenuItem;
    tabIndex: number;
    mediaIcon: string;
    type: MediaType;
    handleTabChange(index: number): void;
    handleDelete(media: Media): void;
    handleUpdate(media: Media): void;
    handleUpload(upload: FileUpload): void;
    refresh(): void;
    handlePreviousPage(): void;
    handleNextPage(): void;
    hasPrevious: boolean;
    hasNext: boolean;
    totalPages: number;
    total: number;
    currentPage: number;
}
export declare const useMedia: () => MediaContextValue;
export interface MediaProviderProps extends MediaPageProps {
    children: any;
}
export declare const MediaProvider: (props: MediaProviderProps) => JSX.Element;
export declare const Tabs: {
    labelKey: string;
    icon: string;
    type: MediaType;
    columns: number;
}[];
