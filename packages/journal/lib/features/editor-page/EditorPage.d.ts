import { File } from "../file/File";
import { Element } from "@mpkelly/react-editor-kit";
export interface EditorPageProps {
    file: File;
    defaultValue?(): Element[];
}
export declare const EditorPage: (props: EditorPageProps) => JSX.Element;
