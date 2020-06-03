export interface ImageSize {
    width: number;
    height: number;
}
export declare const getImageSize: (file: File) => Promise<ImageSize>;
