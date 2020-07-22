import { FlexProps } from "@mpkelly/siam";
export interface PageDetailProps extends FlexProps {
    detail: PageDetailModel;
    onChange(detail: PageDetailModel): void;
}
export declare const PageDetail: (props: PageDetailProps) => JSX.Element;
declare type ColumnModel = {
    text: string;
    alignment: any;
    width?: any;
    height?: any;
};
export declare type PageDetailModel = {
    columns: ColumnModel[];
    margin: number[];
    enabled: boolean;
};
export {};
