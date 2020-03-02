import React, { memo } from "react";
import { Column, Input, Text, FlexProps } from "udx-react";
import { Show } from "../util/Show";

export interface SettingProps extends FlexProps {
  value: any;
  label: string;
  onChange(value: any): any;
  description?: string;
}

export const Setting = memo((props: SettingProps) => {
  const { value, label, onChange, description, ...rest } = props;
  return (
    <Column width="100%" {...rest}>
      <Input
        mt={"lg"}
        labelKey={label}
        value={value}
        onChange={event => onChange(event.currentTarget.value)}
        width="100%"
      />
      <Show when={description}>
        <Text variant="small" color="secondary" mt={"sm"}>
          {description}
        </Text>
      </Show>
    </Column>
  );
});
