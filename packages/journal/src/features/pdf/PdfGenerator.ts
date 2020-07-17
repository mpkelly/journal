import pdfMake from "pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { createDefaultPrintStyle } from "./PdfPrintStyles";
import { PdfFonts } from "./PdfFonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;
//pdfMake.fonts = PdfFonts;

export const createDocumentDefinition = (
  nodes: any[],
  style = createDefaultPrintStyle()
) => {
  const content: any = [];
  const processNode = (node: any) => {
    let block: any = {};

    const createListItems = (node: any) => {
      const items: any[] = [];
      node.children.forEach((child: any) => {
        if (child.type) {
          items.push(processNode(child));
        } else {
          items.push(child.children);
        }
      });
      return items;
    };

    const assignTextStyles = (node: any) => {
      const textStyle = style.text[node.type];

      if (textStyle) {
        block = { ...textStyle };
      }
    };

    switch (node.type) {
      case "h1":
      case "h2":
      case "h3":
      case "h4":
      case "h5":
      case "h6":
      case "paragraph":
        assignTextStyles(node);
        block.text = node.children;
        break;
      case "ordered-list":
        block.ol = createListItems(node);
        break;
      case "unordered-list":
        block.ul = createListItems(node);
        break;
    }

    return block;
  };

  nodes.forEach((node) => content.push(processNode(node)));
  const { text, ...rest } = style;
  return {
    content,
    defaultStyle: {
      font: "Merriweather",
    },
    ...rest,
  };
};

export const createPdfDocument = async (
  nodes: any[],
  style = createDefaultPrintStyle()
): Promise<string> => {
  console.log(pdfMake.vfs);
  console.log(createDocumentDefinition(nodes, style));
  const generator = pdfMake.createPdf(createDocumentDefinition(nodes, style));
  return new Promise((resolve) => generator.getBase64(resolve));
};

export const downloadPdfDocument = (
  nodes: any[],
  style = createDefaultPrintStyle()
) => {
  return pdfMake.createPdf(createDocumentDefinition(nodes, style)).download();
};
