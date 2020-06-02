import React from "react";
import { FlexProps, Text, Column } from "@mpkelly/siam";
import { HelpKeyShortcutDialog } from "../help/HelpKeyShortcutDialog";
import { KeyShortcut } from "../help/HelpKeyShortcut";

export interface WikiPageHelpKeyShortcutDialogProps extends FlexProps {
  onClose(): void;
}

export const WikiPageHelpKeyShortcutDialog = (
  props: WikiPageHelpKeyShortcutDialogProps
) => {
  const { onClose } = props;
  return (
    <HelpKeyShortcutDialog titleLabelKey="Editor shortcuts" onClose={onClose}>
      <Column overflowY="auto" flexShrink={0}>
        <KeyShortcut labelKey="Heading 3" shortcut=":h3" />
        <KeyShortcut labelKey="Blockquote" shortcut=":quote " />
        <KeyShortcut labelKey="Table" shortcut=":table " />
        <KeyShortcut labelKey="Video" shortcut=":video " />
        <KeyShortcut labelKey="Todo List" shortcut=":todo " />
        <KeyShortcut labelKey="Code block" shortcut=":code " />
        <KeyShortcut labelKey="Ordered list" shortcut="1. " />
        <KeyShortcut labelKey="Unordered list" shortcut="- " />
        <KeyShortcut labelKey="Bold" shortcut="⌘+B" />
        <KeyShortcut labelKey="Italic" shortcut="⌘+I" />
        <KeyShortcut labelKey="Underline" shortcut="⌘+U" />
        <KeyShortcut labelKey="Strikethrough" shortcut="⌘+T" />

        <Text kind="small" mt="md">
          Most markdown syntax is also supported
        </Text>
      </Column>
    </HelpKeyShortcutDialog>
  );
};
