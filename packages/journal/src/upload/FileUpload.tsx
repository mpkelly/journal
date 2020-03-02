import React from "react";

export const UploadId = "uploadMedia";
export const FileUpload = () => (
  <input type="file" id={UploadId} hidden multiple />
);
