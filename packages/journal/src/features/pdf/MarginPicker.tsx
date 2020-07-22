import React, { Fragment } from "react";
import { Text, Input, FlexProps, Row, styled } from "@mpkelly/siam";

export interface MarginPickerProps extends FlexProps {
  margin: number[];
  onChange(margin: number[]): void;
}

export const MarginPicker = (props: MarginPickerProps) => {
  const { margin, onChange, labelKey, ...rest } = props;
  const handleChange = (index: number, value: number) => {
    const next = margin.slice();
    if ((value as any) === "") {
      (next[index] as any) = undefined;
    } else {
      next[index] = Number(value);
    }
    onChange(next);
  };
  console.log("M", margin[0]);
  return (
    <Fragment>
      <Text
        className="si-input-label"
        kind="label"
        labelKey={labelKey}
        mb="sm"
      />
      <Container {...rest}>
        <Input
          type={"number"}
          value={margin[0]}
          mr="sm"
          labelKey="left"
          onChange={(value: number) => {
            console.log("V", value);
            handleChange(0, value);
          }}
        />
        <Input
          type={"number"}
          value={margin[1]}
          mr="sm"
          labelKey="top"
          onChange={(value: number) => handleChange(1, value)}
        />
        <Input
          type={"number"}
          value={margin[2]}
          mr="sm"
          labelKey="right"
          onChange={(value: number) => handleChange(2, value)}
        />
        <Input
          type={"number"}
          value={margin[3]}
          labelKey="bottom"
          onChange={(value: number) => handleChange(3, value)}
        />
      </Container>
    </Fragment>
  );
};

const Container = styled(Row)`
  .si-input-label {
    font-size: 10px;
  }

  input {
    width: 24%;
  }
`;
