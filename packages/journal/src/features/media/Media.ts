export interface Media {
  id?: number;
  name: string;
  content?: string;
  source: string;
  pageSource: string;
  time?: number;
  type: MediaType;
  tags: number[];
  [key: string]: any;
}

export enum MediaType {
  Image = "image",
  Video = "video",
  Audio = "audio",
  Text = "text",
}
