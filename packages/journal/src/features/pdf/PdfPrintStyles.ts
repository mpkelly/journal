export type PrintStyle = {
  pageSize: { width: number | string; height: number | string } | string;
  pageOrientation: "landscape" | "portrait";
  pageMargins: number[];
  text: {
    [key: string]: TextStyle;
  };
};

export type TextStyle = {
  color: string;
  margin: number[];
  lineHeight: number;
  fontSize: number;
  font: string;
  alignment: "left" | "right" | "center";
};

export const PageSizes = [
  "A4",
  "A3",
  "A5",
  "B5",
  "EXECUTIVE",
  "FOLIO",
  "LEGAL",
  "LETTER",
  "TABLOID",
  "4A0",
  "2A0",
  "A0",
  "A1",
  "A2",
  "A6",
  "A7",
  "A8",
  "A9",
  "A10",
  "B0",
  "B1",
  "B2",
  "B3",
  "B4",
  "B6",
  "B7",
  "B8",
  "B9",
  "B10",
  "C0",
  "C1",
  "C2",
  "C3",
  "C4",
  "C5",
  "C6",
  "C7",
  "C8",
  "C9",
  "C10",
  "RA0",
  "RA1",
  "RA2",
  "RA3",
  "RA4",
  "SRA0",
  "SRA1",
  "SRA2",
  "SRA3",
  "SRA4",
];

export const createDefaultPrintStyle = (): PrintStyle => ({
  pageSize: "A4",
  pageMargins: [50, 50, 50, 50],
  pageOrientation: "portrait",
  text: {
    h1: {
      color: "#000000",
      margin: [0, 8, 0, 8],
      lineHeight: 1.5,
      fontSize: 30,
      font: "Roboto",
      alignment: "left",
    },
    h2: {
      color: "#000000",
      margin: [0, 7, 0, 7],
      lineHeight: 1.45,
      fontSize: 24,
      font: "Roboto",
      alignment: "left",
    },
    h3: {
      color: "#000000",
      margin: [0, 6, 0, 6],
      lineHeight: 1.4,
      fontSize: 20,
      font: "Roboto",
      alignment: "left",
    },
    h4: {
      color: "#000000",
      margin: [0, 5, 0, 5],
      lineHeight: 1.35,
      fontSize: 18,
      font: "Roboto",
      alignment: "left",
    },
    h5: {
      color: "#000000",
      margin: [0, 4, 0, 4],
      lineHeight: 1.3,
      fontSize: 18,
      font: "Roboto",
      alignment: "left",
    },
    h6: {
      color: "#000000",
      margin: [0, 3, 0, 3],
      lineHeight: 1.25,
      fontSize: 16,
      font: "Roboto",
      alignment: "left",
    },
    paragraph: {
      color: "#000000",
      margin: [0, 6, 0, 6],
      lineHeight: 1.3,
      fontSize: 14,
      font: "Roboto",
      alignment: "left",
    },
  },
});

export const DefaultPrintStyle = createDefaultPrintStyle();
