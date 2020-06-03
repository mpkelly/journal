import { FlexProps } from "@mpkelly/siam";
import { File } from "../file/File";
export interface ContainerPageTableRowProps extends FlexProps {
    file: File;
    icon: string;
}
export declare const ContainerPageTableRow: (props: ContainerPageTableRowProps) => JSX.Element;
