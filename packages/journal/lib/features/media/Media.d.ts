export interface Media {
    id?: number;
    name: string;
    content?: string;
    source: string;
    pageSource: string;
    time?: number;
    type: MediaType;
    tags: string[];
    [key: string]: any;
}
export declare enum MediaType {
    Image = "image",
    Video = "video",
    Audio = "audio",
    Text = "text"
}
