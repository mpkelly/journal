import React from "react";

export interface PdfPreviewProps {
  uri: string;
  width: number | string;
  height: number | string;
}

export const PdfPreview = (props: PdfPreviewProps) => {
  const { uri, width, height } = props;
  return (
    <iframe
      width={width}
      height={height}
      style={{ border: "none" }}
      src={`data:application/pdf;base64, ${uri}#toolbar=0&navpanes=0&scrollbar=0`}
    />
  );
};
