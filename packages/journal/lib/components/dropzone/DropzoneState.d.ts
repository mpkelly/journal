export declare const useDropzoneState: (handleFiles: (files: File[]) => void) => {
    over: import("react-hanger/useBoolean").UseBoolean;
    handleOver: (event: React.DragEvent) => void;
    handleLeave: (event: React.DragEvent) => void;
    handleDrop: (event: React.DragEvent) => void;
};
