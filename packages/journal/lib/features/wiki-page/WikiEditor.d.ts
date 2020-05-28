/**
 Something like Dropbox Paper
**/
import { System } from "@mpkelly/siam";
import { File } from "../file/File";
export interface WikiEditorProps {
    system: System;
    file: File;
}
export declare const WikiEditor: (props: WikiEditorProps) => JSX.Element;
