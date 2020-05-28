import { FlexProps } from "@mpkelly/siam";
import { File } from "../file/File";
export interface FolderPageProps extends FlexProps {
    file: File;
}
export declare const FolderPage: (props: FolderPageProps) => JSX.Element;
