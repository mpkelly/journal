export declare type PrintStyle = {
    pageSize: {
        width: number | string;
        height: number | string;
    } | string;
    pageOrientation: "landscape" | "portrait";
    pageMargins: number[];
    text: {
        [key: string]: TextStyle;
    };
};
export declare type TextStyle = {
    color: string;
    margin: number[];
    lineHeight: number;
    fontSize: number;
    font: string;
    alignment: "left" | "right" | "center";
};
export declare const PageSizes: string[];
export declare const createDefaultPrintStyle: () => PrintStyle;
export declare const DefaultPrintStyle: PrintStyle;
