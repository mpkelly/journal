import { FlexProps } from "@mpkelly/siam";
import { File } from "../file/File";
export interface EditorPageTemplatesTabProps extends FlexProps {
    file: File;
}
export declare const EditorPageTemplatesTab: (props: EditorPageTemplatesTabProps) => JSX.Element;
