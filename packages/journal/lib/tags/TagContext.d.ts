import { Tag } from "./Tag";
import { Media } from "../media/MediaDatabase";
export interface TagContextValue {
    tags: Tag[];
    addTag(): void;
    deleteTag(tag: Tag): void;
    updateTag(tag: Tag): void;
    toggleTag(media: Media, tagId?: number): Promise<Media>;
    selected: number[];
    toggleSelected(tagId: number): void;
}
export declare const useTags: () => TagContextValue;
export interface TaggerProviderProps {
    children: any;
}
export declare const TagProvider: (props: TaggerProviderProps) => JSX.Element;
