import React, { Fragment } from "react";
import { FlexProps, Text } from "@mpkelly/siam";
import { PageSizes } from "./PdfPrintStyles";
import { Dropdown } from "../../components/dropdown/Dropdown";

export interface PageSizePickerProps extends FlexProps {
  value: string;
  onChange(pageSize: string): void;
}

export const PageSizePicker = (props: PageSizePickerProps) => {
  const { value, onChange, ...rest } = props;
  return (
    <Fragment>
      <Text
        className="si-input-label"
        kind="label"
        labelKey="pageSize"
        mb="sm"
      />
      <Dropdown
        items={PageSizes}
        value={value}
        onChange={onChange}
        width={284}
        {...rest}
      />
    </Fragment>
  );
};
