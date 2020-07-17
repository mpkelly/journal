import React, { Fragment } from "react";
import { Text, FlexProps } from "@mpkelly/siam";
import { Dropdown } from "../../components/dropdown/Dropdown";

export interface FontPickerProps extends FlexProps {
  value: string;
  onChange(pageSize: string): void;
}

export const FontPicker = (props: FontPickerProps) => {
  const { value, onChange, ...rest } = props;
  return (
    <Fragment>
      <Text className="si-input-label" kind="label" labelKey="font" mb="sm" />
      <Dropdown
        items={Fonts}
        value={value}
        onChange={onChange}
        width={284}
        {...rest}
      />
    </Fragment>
  );
};

const Fonts = ["Roboto", "Merriweather"];
