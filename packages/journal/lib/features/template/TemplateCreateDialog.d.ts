import { FlexProps } from "@mpkelly/siam";
import { File } from "../file/File";
export interface TemplateCreateDialogProps extends FlexProps {
    file: File;
    onCancel(): void;
}
export declare const TemplateCreateDialog: (props: TemplateCreateDialogProps) => JSX.Element;
