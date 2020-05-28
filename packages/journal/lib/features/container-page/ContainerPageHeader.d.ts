import { FlexProps, MenuItemModel } from "@mpkelly/siam";
import { File } from "../file/File";
export interface ContainerPageHeaderProps extends FlexProps {
    file: File;
    icon: string;
    menuItems: MenuItemModel[];
}
export declare const ContainerPageHeader: (props: ContainerPageHeaderProps) => JSX.Element;
