export function getDomain(url: string) {
  var a = document.createElement("a");
  a.href = url;
  return a.hostname.replace("www.", "");
}

export const downloadBlob = (blob: Blob, fileName: string) => {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  document.body.appendChild(link);
  link.style.display = "none";
  link.href = url;
  link.download = fileName;
  link.click();
  window.URL.revokeObjectURL(url);
};
