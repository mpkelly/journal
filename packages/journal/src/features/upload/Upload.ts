import { UploadId } from "./FileUpload";
import { ImageExtensions } from "./FileExtensions";

export interface UseUploadValue {
  openFileBrowser(): void;
}

export interface FileUpload {
  images: File[];
  docs: File[];
  text: File[];
}

export const useUpload = (
  onFiles: (files: FileUpload) => void
): UseUploadValue => {
  const uploadInput = () => {
    return document.getElementById(UploadId) as HTMLInputElement;
  };

  const handleFiles = () => {
    const input = uploadInput();
    const files = Array.from(input.files as FileList);
    input.value = "";
    onFiles(filterFiles(files));
  };

  const openFileBrowser = () => {
    const input = uploadInput();
    input.onchange = handleFiles;
    input.click();
  };

  return { openFileBrowser };
};

const filterFiles = (files: File[]) => {
  const upload: FileUpload = {
    images: [],
    docs: [],
    text: []
  };
  files.forEach(file => {
    const ext = file.type.split("/")[1];
    if (ImageExtensions.includes(ext)) {
      upload.images.push(file);
    }
  });

  return upload;
};
