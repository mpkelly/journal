import React from "react";
import { Text, Label, FlexProps, Row } from "@mpkelly/siam";

export interface KeyShortcutProps extends FlexProps {
  labelKey: string;
  shortcut: string;
}

export const KeyShortcut = (props: KeyShortcutProps) => {
  const { labelKey, shortcut, ...rest } = props;
  return (
    <Row gravity="center-start" height={30} {...rest}>
      <Text labelKey={labelKey} />
      <Label kind="shorcut" ml="auto">
        {shortcut}
      </Label>
    </Row>
  );
};
