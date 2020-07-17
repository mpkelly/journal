import React, { Fragment } from "react";
import { Text, FlexProps } from "@mpkelly/siam";
import { Dropdown } from "../../components/dropdown/Dropdown";

export interface PageOrientationPickerProps extends FlexProps {
  value: string;
  onChange(pageSize: string): void;
}

export const PageOrientationPicker = (props: PageOrientationPickerProps) => {
  const { value, onChange, ...rest } = props;
  return (
    <Fragment>
      <Text kind="label" labelKey="pageOrientation" mb="sm" />
      <Dropdown
        items={Orientations}
        value={value}
        onChange={onChange}
        width={284}
        {...rest}
      />
    </Fragment>
  );
};

const Orientations = ["portrait", "landscape"];
