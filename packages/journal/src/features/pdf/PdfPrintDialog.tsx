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
  Section,
  styled,
} from "@mpkelly/siam";
import { Node } from "@mpkelly/react-editor-kit";
import { Dialog } from "../../components/dialog/Dialog";
import { PageSizePicker } from "./PageSizePicker";
import { PageOrientationPicker } from "./PageOrientationPicker";
import { MarginPicker } from "./MarginPicker";
import { usePdfPrintDailogState } from "./PdfPrintDialogState";
import { PdfPreview } from "./PdfPreview";
import { PdfTextStyles } from "./PdfTextStyles";
import { Collapse } from "../../components/collapse/Collapse";
import { Divider } from "../../components/divider/Divider";
import { PageDetail } from "./PageDetail";

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
  const { header, footer } = printStyle;
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
          overflowX="hidden"
          p="md"
        >
          <Row alignItems="center" mb="md" p="md" mt="md">
            <Icon name="pdf" mr="md" />
            <Text labelKey="Print Settings" kind="large" />
            <Icon
              kind="small.button"
              name="clear"
              color="secondary.text"
              ml="auto"
              onClick={onClose}
            />
          </Row>

          <Column overflowY="auto" pb="md" flexGrow={1}>
            <Collapse
              title={<Text kind="sectionLabel" labelKey="general" />}
              initialCollapsed={false}
            >
              <PageOrientationPicker
                value={printStyle.pageOrientation}
                onChange={(value) =>
                  handleStyleChange("pageOrientation", value)
                }
                mb="xl"
              />
              <PageSizePicker
                value={printStyle.pageSize as string}
                onChange={(value) => handleStyleChange("pageSize", value)}
                mb="xl"
              />
              <MarginPicker
                labelKey="Page margins"
                margin={printStyle.pageMargins}
                onChange={(value) => handleStyleChange("pageMargins", value)}
                mb="xl"
              />
            </Collapse>

            <Collapse
              title={<Text kind="sectionLabel" labelKey="textStyles" />}
            >
              <PdfTextStyles styles={styles} onChange={handleTextStyleChange} />
            </Collapse>
            <Collapse title={<Text kind="sectionLabel" labelKey="header" />}>
              <PageDetail
                detail={header}
                onChange={(header) => handleStyleChange("header", header)}
              />
            </Collapse>
            <Collapse title={<Text kind="sectionLabel" labelKey="footer" />}>
              <PageDetail
                detail={footer}
                onChange={(footer) => handleStyleChange("footer", footer)}
              />
            </Collapse>
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
