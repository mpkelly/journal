import { PagedResult } from "../database/Database";
import { Media, MediaType } from "./Media";
export interface MediaDatabase {
    add(media: Media): Promise<void>;
    update(media: Media): Promise<number>;
    delete(id: number): Promise<void>;
    loadMedia(type: MediaType, search: string, pageNumber: number, pageSize: number): Promise<PagedResult<Media>>;
}
export declare const useMediaDatabase: () => MediaDatabase;
export declare const IndexDBMediaDatabase: MediaDatabase;
