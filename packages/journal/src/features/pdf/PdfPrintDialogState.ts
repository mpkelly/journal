import { Node } from "@mpkelly/react-editor-kit";
import { downloadPdfDocument, createPdfDocument } from "./PdfGenerator";
import { useState, useCallback, useEffect } from "react";
import {
  PrintStyle,
  TextStyle,
  createDefaultPrintStyle,
} from "./PdfPrintStyles";

export const usePdfPrintDailogState = (nodes: Node[], onClose: () => void) => {
  const initialStyle = createDefaultPrintStyle();
  const [preview, setPreview] = useState("");

  const [printStyle, setPrintStyle] = useState<PrintStyle>(initialStyle);

  useEffect(() => {
    const timeout = setTimeout(
      () => createPdfDocument(nodes, printStyle).then(setPreview),
      1000
    );
    return () => clearTimeout(timeout);
  }, [printStyle]);

  const handlePrint = () => {
    downloadPdfDocument(nodes, printStyle);
    onClose();
  };

  const handleStyleChange = (property: keyof PrintStyle, value: any) => {
    setPrintStyle((current) => ({ ...current, [property]: value }));
  };

  const handleTextStyleChange = useCallback(
    (name: string, property: keyof TextStyle, value: any) => {
      (printStyle.text[name] as any)[property] = value;
      setPrintStyle({ ...printStyle });
    },
    [printStyle]
  );

  return {
    preview,
    handlePrint,
    printStyle,
    handleStyleChange,
    handleTextStyleChange,
  };
};
