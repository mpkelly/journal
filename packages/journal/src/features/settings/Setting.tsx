import React, { memo } from "react";
import { Column, Input, Text, FlexProps } from "@mpkelly/siam";
import { Show } from "../../util/Show";

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
        onChange={onChange}
        width="100%"
      />
      <Show when={description}>
        <Text kind="small" color="secondary" mt={"sm"}>
          {description}
        </Text>
      </Show>
    </Column>
  );
});
