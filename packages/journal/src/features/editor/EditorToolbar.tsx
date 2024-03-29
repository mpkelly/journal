import React from "react";
import { Row, FlexProps, Text, Icon, Scope } from "@mpkelly/siam";
import { Show } from "../../util/Show";
import {
  EditorToolbar as Toolbar,
  HeadingSelect,
  Divider,
  FontSelect,
  FontSizeSelect,
  BoldButton,
  ItalicButton,
  LinkButton,
  StrikethroughButton,
  UnderlineButton,
  InlineCodeButton,
  ColorPickerButton,
  TextAlignLeftButton,
  TextAlignCenterButton,
  TextAlignRightButton,
  TextAlignJustifiedButton,
  OrderedListButton,
  UnorderedListButton,
  BlockquoteButton,
  ClearFormattingButton,
  SpellCheckButton,
  TableButton,
  ReadOnlyButton,
  LayoutButton,
  LayoutMenuItem,
  CustomLayoutMenuItem,
  InitialLetterButton,
} from "@mpkelly/react-editor-kit";

export interface EditorToolbarProps extends FlexProps {
  saved: boolean;
  onToggleLocked(): void;
  onPrintPdf(): void;
  onSave(): void;
  readOnly?: boolean;
  children?: JSX.Element | JSX.Element[];
}

export const EditorToolbar = (props: EditorToolbarProps) => {
  const {
    children,
    onToggleLocked,
    onSave,
    saved,
    readOnly,
    onPrintPdf,
    ...rest
  } = props;

  return (
    <Row
      minHeight={45}
      p="sm"
      alignItems="center"
      borderBottom={"1px solid dividers"}
      {...rest}
    >
      <Row mx="md" flexGrow={1}>
        <Show when={!readOnly}>
          <Toolbar>
            <HeadingSelect />
            <Divider />
            <FontSelect />
            <Divider />
            <FontSizeSelect />
            <Divider />
            <BoldButton
              className="material-icons-round"
              ligature="format_bold"
              tooltipText={"⌘+B"}
              tooltipOffsets={{ v: 8 }}
            />
            <ItalicButton
              className="material-icons-round"
              ligature="format_italic"
              tooltipText={"⌘+I"}
              tooltipOffsets={{ v: 8 }}
            />
            <StrikethroughButton
              className="material-icons-round"
              ligature="format_strikethrough"
              tooltipText={"⌘+T"}
              tooltipOffsets={{ v: 8 }}
            />
            <UnderlineButton
              className="material-icons-round"
              ligature="format_underlined"
              tooltipText={"⌘+U"}
              tooltipOffsets={{ v: 8 }}
            />
            <InlineCodeButton
              className="material-icons-round"
              ligature="code"
            />
            <LinkButton className="material-icons-round" ligature="link" />
            <Divider />
            <ColorPickerButton
              className="material-icons-round"
              ligature="palette"
              colors={Colors}
            />
            <Divider />
            <TableButton
              className="material-icons-round"
              ligature="border_all"
            />
            <Divider />
            <TextAlignLeftButton
              className="material-icons-round"
              ligature="format_align_left"
            />
            <TextAlignCenterButton
              className="material-icons-round"
              ligature="format_align_center"
            />
            <TextAlignRightButton
              className="material-icons-round"
              ligature="format_align_right"
            />
            <TextAlignJustifiedButton
              className="material-icons-round"
              ligature="format_align_justify"
            />
            <Divider />
            <LayoutButton
              className="material-icons-round"
              ligature="view_array"
            >
              <LayoutMenuItem text="1:1" layout={[1, 1]} />
              <LayoutMenuItem text="2:1" layout={[2, 1]} />
              <LayoutMenuItem text="1:2" layout={[1, 2]} />
              <LayoutMenuItem text="1:1:1" layout={[1, 1, 1]} />
              <LayoutMenuItem text="1:3:1" layout={[1, 3, 1]} />
              <CustomLayoutMenuItem text="Custom" />
            </LayoutButton>
            <Divider />
            <OrderedListButton
              className="material-icons-round"
              ligature="format_list_numbered"
            />
            <UnorderedListButton
              className="material-icons-round"
              ligature="format_list_bulleted"
            />
            <Divider />
            <InitialLetterButton
              className="material-icons-round"
              ligature="text_fields"
              tooltipText={"Toggle initial letter"}
              tooltipOffsets={{ v: 8 }}
            />

            <BlockquoteButton
              className="material-icons-round"
              ligature="format_quote"
            />

            <Divider />

            <SpellCheckButton
              className="material-icons-round"
              ligature="spellcheck"
            />

            <ClearFormattingButton
              className="material-icons-round"
              ligature="format_clear"
            />
          </Toolbar>
        </Show>
      </Row>
      <Row gravity="center-start" flexShrink={0} ml="auto">
        <Scope value="toolbar">
          <Row minWidth={50}>
            <Show when={saved}>
              <Text labelKey="saved" color="muted" textTransform="uppercase" />
            </Show>
            <Show when={!saved}>
              <Icon
                kind="button"
                name={"save"}
                onClick={onSave}
                data-test="editor-save"
              />
            </Show>
          </Row>
          <Divider />
          <Icon kind="button" name={"print"} onClick={window.print} />
          <Icon mx="sm" kind="button" name="pdf" onClick={onPrintPdf} />
          <Divider />
          <ReadOnlyButton
            className="material-icons-round"
            ligature="lock_open"
            readOnlyClassName="material-icons-round"
            readOnlyLigature="lock"
            onMouseDown={onToggleLocked}
          />
        </Scope>
      </Row>
    </Row>
  );
};

const splitColors = (array: string[], size: number) => {
  const results: string[][] = [];
  while (array.length) {
    results.push(array.splice(0, size));
  }
  return results;
};

export const BaseColors = [
  "#f6e58d",
  "#ffbe76",
  "#ff7979",
  "#badc58",
  "#ffffff",
  "#f9ca24",
  "#eb4d4b",
  "#f0932b",
  "#6ab04c",
  "#b1b1b1",
  "#7ed6df",
  "#e056fd",
  "#686de0",
  "#95afc0",
  "#22a6b3",
  "#be2edd",
  "#4834d4",
  "#535c68",
  "#4C5ADE",
];

const Colors = splitColors(BaseColors, 5);
