import { FlexProps } from "@mpkelly/siam";
import { File } from "../file/File";
export interface WikiPageProps extends FlexProps {
    file: File;
}
export declare const WikiPage: (props: WikiPageProps) => JSX.Element;
