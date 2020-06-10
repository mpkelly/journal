import React from "react";
import { FlexProps, Text, Column } from "@mpkelly/siam";
import { HelpKeyShortcutDialog } from "../help/HelpKeyShortcutDialog";
import { KeyShortcut } from "../help/HelpKeyShortcut";

export interface EditorPageHelpKeyShortcutDialogProps extends FlexProps {
  onClose(): void;
}

export const EditorPageHelpKeyShortcutDialog = (
  props: EditorPageHelpKeyShortcutDialogProps
) => {
  const { onClose } = props;
  return (
    <HelpKeyShortcutDialog titleLabelKey="Editor shortcuts" onClose={onClose}>
      <Column overflowY="auto" flexShrink={0}>
        <KeyShortcut labelKey="Heading 1" shortcut=":h1" />
        <KeyShortcut labelKey="Heading 2" shortcut=":h2" />
        <KeyShortcut labelKey="Heading 3" shortcut=":h3" />
        <KeyShortcut labelKey="Heading 4" shortcut=":h4" />
        <KeyShortcut labelKey="Heading 5" shortcut=":h5" />
        <KeyShortcut labelKey="Heading 6" shortcut=":h6" />
        <KeyShortcut labelKey="Blockquote" shortcut=":quote " />
        <KeyShortcut labelKey="Table" shortcut=":table " />
        <KeyShortcut labelKey="Code block" shortcut=":code " />
        <KeyShortcut labelKey="Ordered list" shortcut="1. " />
        <KeyShortcut labelKey="Unordered list" shortcut="- " />
        <KeyShortcut labelKey="Bold" shortcut="⌘+B" />
        <KeyShortcut labelKey="Italic" shortcut="⌘+I" />
        <KeyShortcut labelKey="Underline" shortcut="⌘+U" />
        <KeyShortcut labelKey="Strikethrough" shortcut="⌘+T" />

        <Text kind="small" mt="md">
          Some markdown syntax is also supported
        </Text>
      </Column>
    </HelpKeyShortcutDialog>
  );
};
