import React from "react";
import { FlexProps, Row } from "@mpkelly/siam";
import { useDropzoneState } from "./DropzoneState";

export interface DropzoneProps extends FlexProps {
  handleFiles: (files: File[]) => void;
}

export const Dropzone = (props: DropzoneProps) => {
  const { handleFiles, ...rest } = props;
  const { over, handleOver, handleLeave, handleDrop } = useDropzoneState(
    handleFiles
  );
  return (
    <Row
      onDragEnter={handleOver}
      onDragOver={handleOver}
      onDragLeave={handleLeave}
      onDrop={handleDrop}
      selected={over.value}
      border="2px dashed transparent"
      selectedBorderColor="accent"
      {...rest}
    />
  );
};
