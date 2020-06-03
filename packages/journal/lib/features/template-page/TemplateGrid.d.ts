import { FlexProps } from "@mpkelly/siam";
import { File } from "../file/File";
export interface TemplateGridProps extends FlexProps {
    onCreate(template: File): void;
}
export declare const TemplateGrid: (props: TemplateGridProps) => JSX.Element;
