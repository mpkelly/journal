export interface MediaDatabase {
    add(media: Media): Promise<void>;
    update(media: Media): Promise<number>;
    delete(id: number): Promise<void>;
    loadMedia(type: MediaType, tagIdss: number[], pageNumber: number, pageSize: number): Promise<{
        total: number;
        items: Media[];
    }>;
}
export declare const useMediaDatabase: () => MediaDatabase;
export declare const IndexDBMediaDatabase: MediaDatabase;
export interface Media {
    id?: number;
    name: string;
    content?: string;
    source: string;
    pageSource: string;
    time?: number;
    type: MediaType;
    tags: number[];
}
export declare enum MediaType {
    Image = "image",
    Video = "video",
    Audio = "audio",
    Text = "text"
}
