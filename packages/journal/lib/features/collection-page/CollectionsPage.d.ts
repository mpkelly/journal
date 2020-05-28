import { FlexProps } from "@mpkelly/siam";
import { File } from "../file/File";
export interface CollectionsPageProps extends FlexProps {
    file: File;
}
export declare const CollectionsPage: (props: CollectionsPageProps) => JSX.Element;
