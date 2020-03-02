export const fileToBase64 = (file: File) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () =>
      resolve((reader.result || "").toString().replace(/^data:(.*,)?/, ""));
    reader.onerror = error => reject(error);
  });
