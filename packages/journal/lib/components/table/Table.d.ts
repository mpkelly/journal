import { ReactNode, FC } from "react";
import { FlexProps } from "@mpkelly/siam";
export interface TableColumn {
    key: string;
    nameKey?: string;
    name?: string;
    props?: any;
}
export interface TableProps extends FlexProps {
    columns: TableColumn[];
    children?: ReactNode;
}
export declare const Table: (props: TableProps) => JSX.Element;
export declare const TableContainer: FC<FlexProps>;
