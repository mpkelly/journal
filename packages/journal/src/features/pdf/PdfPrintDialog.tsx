import React from "react";
import {
  Text,
  Button,
  Icon,
  FlexProps,
  Column,
  Row,
  Scope,
  Show,
} from "@mpkelly/siam";
import { Node } from "@mpkelly/react-editor-kit";
import { Dialog } from "../../components/dialog/Dialog";
import { PageSizePicker } from "./PageSizePicker";
import { PageOrientationPicker } from "./PageOrientationPicker";
import { MarginPicker } from "./MarginPicker";
import { usePdfPrintDailogState } from "./PdfPrintDialogState";
import { PdfPreview } from "./PdfPreview";
import { PdfTextStyles } from "./PdfTextStyles";

export interface PdfPrintDialogProps extends FlexProps {
  onClose(): void;
  nodes: Node[];
}

export const PdfPrintDialog = (props: PdfPrintDialogProps) => {
  const { nodes, onClose } = props;
  const {
    preview,
    printStyle,
    handleStyleChange,
    handlePrint,
    handleTextStyleChange,
  } = usePdfPrintDailogState(nodes, onClose);
  const styles = new Map(Object.entries(printStyle.text));
  return (
    <Scope value="dark">
      <Dialog
        width={900}
        height={700}
        onClickOutside={onClose}
        flexDirection="row"
        background="background"
        overlayBackground="background-alpha50"
        p="0"
      >
        <Column flexGrow={1} p="md">
          <Row
            backgroundColor="white"
            mx="auto"
            my="md"
            width="96%"
            height="100%"
            br="sm"
          >
            <Show when={preview}>
              <PdfPreview uri={preview} width="100%" height="100%" />
            </Show>
          </Row>
        </Column>
        <Column
          ml="auto"
          width={300}
          height="100%"
          borderLeft="1px solid dividers"
          p="md"
        >
          <Row gravity="center-start" mb="lg" p="md">
            <Icon name="pdf" mr="md" />
            <Text labelKey="Print Settings" />
          </Row>

          <Column overflowY="auto" overflowX="hidden" pb="md" flexGrow={1}>
            <Text kind="sectionLabel" labelKey="general" />
            <PageOrientationPicker
              value={printStyle.pageOrientation}
              onChange={(value) => handleStyleChange("pageOrientation", value)}
              mb="lg"
            />
            <PageSizePicker
              value={printStyle.pageSize as string}
              onChange={(value) => handleStyleChange("pageSize", value)}
              mb="lg"
            />
            <MarginPicker
              labelKey="Page margins (pt)"
              margin={printStyle.pageMargins}
              onChange={(value) => handleStyleChange("pageMargins", value)}
            />

            <Text kind="sectionLabel" labelKey="textStyles" />

            <PdfTextStyles styles={styles} onChange={handleTextStyleChange} />
          </Column>

          <Button
            flexShrink={0}
            labelKey="print"
            mt="auto"
            onClick={handlePrint}
          />
        </Column>
      </Dialog>
    </Scope>
  );
};
