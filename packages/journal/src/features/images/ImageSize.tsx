export interface ImageSize {
  width: number;
  height: number;
}

export const getImageSize = (file: File): Promise<ImageSize> => {
  return new Promise((resolve, reject) => {
    var url = URL.createObjectURL(file);
    var img = new Image();

    img.onload = function () {
      resolve({ width: img.naturalWidth, height: img.naturalHeight });
      URL.revokeObjectURL(img.src);
    };

    img.onerror = function (error) {
      reject(error);
    };

    img.src = url;
  });
};
