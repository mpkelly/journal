import { Element } from "@mpkelly/react-editor-kit";
import { EditorPageProps } from "../editor-page/EditorPage";
export declare const useEditorState: (props: EditorPageProps) => {
    file: import("../file/File").File;
    saved: import("react-hanger/useBoolean").UseBoolean;
    value: Element[];
    instantSave: () => void;
    handleToggleLocked: () => void;
    handleChange: (next: Element[]) => void;
    readOnly: import("react-hanger/useBoolean").UseBoolean;
    handleRestorePreviousValue: () => void;
    showPdfPrintDialog: import("react-hanger/useBoolean").UseBoolean;
};
