import { blockEvent } from "@mpkelly/react-editor-kit";
import useBoolean from "react-hanger/useBoolean";

export const useDropzoneState = (handleFiles: (files: File[]) => void) => {
  const over = useBoolean(false);
  const handleOver = (event: React.DragEvent) => {
    blockEvent(event);
    over.setTrue();
  };

  const handleLeave = (event: React.DragEvent) => {
    blockEvent(event);
    over.setFalse();
  };

  const handleDrop = (event: React.DragEvent) => {
    handleLeave(event);
    handleFiles(Array.from(event.dataTransfer.files));
  };

  return { over, handleOver, handleLeave, handleDrop };
};
