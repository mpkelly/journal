import { FlexProps } from "@mpkelly/siam";
import { File } from "../file/File";
export interface TemplateCardProps extends FlexProps {
    template: File;
    onCreate(): void;
    onDelete(): void;
    onRename(name: string): void;
}
export declare const TemplateCard: (props: TemplateCardProps) => JSX.Element;
