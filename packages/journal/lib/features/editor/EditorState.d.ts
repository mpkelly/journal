import { Element } from "@mpkelly/react-editor-kit";
import { EditorPageProps } from "../editor-page/EditorPage";
export declare const useEditorState: (props: EditorPageProps) => {
    file: import("../file/File").File;
    saved: boolean;
    value: Element[];
    instantSave: () => void;
    handleToggleLocked: () => void;
    handleChange: (next: Element[]) => void;
    readOnly: boolean;
    handleRestorePreviousValue: () => void;
};
