export declare const createDocumentDefinition: (nodes: any[], style?: import("./PdfPrintStyles").PrintStyle) => {
    pageSize: string | {
        width: string | number;
        height: string | number;
    };
    pageOrientation: "landscape" | "portrait";
    pageMargins: number[];
    content: any;
    defaultStyle: {
        font: string;
    };
};
export declare const createPdfDocument: (nodes: any[], style?: import("./PdfPrintStyles").PrintStyle) => Promise<string>;
export declare const downloadPdfDocument: (nodes: any[], style?: import("./PdfPrintStyles").PrintStyle) => any;
