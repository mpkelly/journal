export interface UseUploadValue {
    openFileBrowser(): void;
}
export interface FileUpload {
    images: File[];
    docs: File[];
    text: File[];
}
export declare const useUpload: (onFiles: (files: FileUpload) => void) => UseUploadValue;
