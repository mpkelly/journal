import pdfMake from "pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { createDefaultPrintStyle } from "./PdfPrintStyles";
import { createFontsVfs } from "./PdfFonts";

export const createDocumentDefinition = (
  nodes: any[],
  style = createDefaultPrintStyle()
) => {
  style = clone(style);
  const content: any = [];
  const processNode = (node: any) => {
    let block: any = {};

    const mapStyle = (nodes: any[]) => {
      nodes.forEach((node) => {
        if (node.italic) {
          node.italics = true;
        } else {
          delete node.italics;
        }
      });
      return nodes;
    };

    const createListItems = (node: any) => {
      const items: any[] = [];
      node.children.forEach((child: any) => {
        if (child.type) {
          items.push(processNode(child));
        } else {
          items.push(mapStyle(child.children));
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
        block.text = mapStyle(node.children);
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

  const { text, header: headerDetail, footer: footerDetail, ...rest } = style;
  let header: any = undefined;

  if (headerDetail.enabled) {
    header = (page: number, totalPages: number) => {
      const merged = { ...style.text["header"], ...headerDetail };

      merged.columns.forEach((column: any) => {
        column.text = column.text.split("{page}").join(String(page));
        column.text = column.text
          .split("{totalPages}")
          .join(String(totalPages));
      });
      return merged;
    };
  }
  let footer: any = undefined;

  if (footerDetail.enabled) {
    footer = (page: number, totalPages: number) => {
      const merged = { ...style.text["footer"], ...footerDetail };

      merged.columns.forEach((column: any) => {
        column.text = column.text.split("{page}").join(String(page));
        column.text = column.text
          .split("{totalPages}")
          .join(String(totalPages));
      });
      return merged;
    };
  }

  return {
    content,
    header,
    footer,
    ...rest,
  };
};

export const createPdfDocument = async (
  nodes: any[],
  style = createDefaultPrintStyle()
): Promise<string> => {
  const fonts = await createFontsVfs();

  pdfMake.vfs = {
    ...fonts,
    ...pdfFonts.pdfMake.vfs,
  };
  pdfMake.fonts = {
    Merriweather: {
      normal: "Merriweather-Regular.ttf",
      bold: "Merriweather-Bold.ttf",
      italics: "Merriweather-Italic.ttf",
      bolditalics: "Merriweather-BoldItalic.ttf",
    },
    Roboto: {
      normal: "Roboto-Regular.ttf",
      bold: "Roboto-Medium.ttf",
      italics: "Roboto-Italic.ttf",
      bolditalics: "Roboto-MediumItalic.ttf",
    },
  };
  const generator = pdfMake.createPdf(createDocumentDefinition(nodes, style));
  return new Promise((resolve) => generator.getBase64(resolve));
};

export const downloadPdfDocument = (
  nodes: any[],
  style = createDefaultPrintStyle()
) => {
  return pdfMake.createPdf(createDocumentDefinition(nodes, style)).download();
};

const clone = (object: any) => JSON.parse(JSON.stringify(object));
