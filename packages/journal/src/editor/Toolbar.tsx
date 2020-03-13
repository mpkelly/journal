import React, { useState, useEffect } from "react";
import { Row, FlexProps, Text } from "udx-react";
import { Show } from "../util/Show";
import { Item } from "../content/Item";
import { useDatabase } from "../database/Databases";
import { Collection } from "../collections/Collection";
import { IconButton } from "../icons/IconButton";
import { SaveIcon, PrintIcon } from "../icons/IconNames";
import {
  EditorToolbar,
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
  QuoteButton,
  ClearFormattingButton,
  SpellCheckButton
} from "@mpkelly/react-editor-kit";
import { Breadcrumb } from "./Breadcrumb";
import { ExtendedColors } from "../color-picker/ColorPicker";

export interface ToolbarProps extends FlexProps {
  collectionId: number;
  item: Item;
  saved: boolean;
  onToggleLocked(): void;
  onSave(): void;
  children?: JSX.Element | JSX.Element[];
}

export const Toolbar = (props: ToolbarProps) => {
  const {
    children,
    collectionId,
    item,
    onToggleLocked,
    onSave,
    saved,
    ...rest
  } = props;
  const db = useDatabase();

  const [collection, setCollection] = useState<Collection | undefined>(
    undefined
  );
  useEffect(() => {
    db.getCollection(collectionId).then(setCollection);
  }, [item]);

  const icon = item.locked ? "lock" : "lock-open";
  return (
    <Row
      minHeight={45}
      p="sm"
      alignItems="center"
      borderBottom={"1px solid dividers"}
      {...rest}
    >
      <Row mx="md" flexGrow={1}>
        <Show when={item.locked && collection}>
          <Breadcrumb collection={collection as Collection} item={item} />
        </Show>
        <Show when={!item.locked}>
          <EditorToolbar>
            <HeadingSelect />
            <Divider />
            <FontSelect />
            <Divider />
            <FontSizeSelect />
            <Divider />
            <BoldButton
              className="material-icons-outlined"
              ligature="format_bold"
            />
            <ItalicButton
              className="material-icons-outlined"
              ligature="format_italic"
            />
            <StrikethroughButton
              className="material-icons-outlined"
              ligature="format_strikethrough"
            />
            <UnderlineButton
              className="material-icons-outlined"
              ligature="format_underlined"
            />
            <InlineCodeButton
              className="material-icons-outlined"
              ligature="code"
            />
            <LinkButton className="material-icons-outlined" ligature="link" />
            <Divider />
            <ColorPickerButton
              className="material-icons-outlined"
              ligature="text_format"
              colors={Colors}
            />
            <Divider />
            <TextAlignLeftButton
              className="material-icons-outlined"
              ligature="format_align_left"
            />
            <TextAlignCenterButton
              className="material-icons-outlined"
              ligature="format_align_center"
            />
            <TextAlignRightButton
              className="material-icons-outlined"
              ligature="format_align_right"
            />
            <TextAlignJustifiedButton
              className="material-icons-outlined"
              ligature="format_align_justify"
            />
            <Divider />
            <OrderedListButton
              className="material-icons-outlined"
              ligature="format_list_numbered"
            />
            <UnorderedListButton
              className="material-icons-outlined"
              ligature="format_list_bulleted"
            />
            <Divider />
            <QuoteButton
              className="material-icons-outlined"
              ligature="format_quote"
            />
            <Divider />
            <SpellCheckButton
              className="material-icons-outlined"
              ligature="spellcheck"
            />
            <ClearFormattingButton
              className="material-icons-outlined"
              ligature="format_clear"
            />
          </EditorToolbar>
        </Show>
      </Row>
      <Row alignItems="center" flexShrink={0} ml="auto">
        <Show when={saved}>
          <Text labelKey="saved" color="muted" />
        </Show>
        <Show when={!saved}>
          <IconButton name={SaveIcon} onClick={onSave} color={"primaryText"} />
        </Show>
        <Divider />
        <IconButton
          name={PrintIcon}
          onClick={window.print}
          color={"primaryText"}
        />
        <Divider />
        <IconButton
          name={icon}
          onClick={onToggleLocked}
          color={"primaryText"}
        />
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

const Colors = splitColors(ExtendedColors, 5);
