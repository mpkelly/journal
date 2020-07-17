import React from "react";
import { Text, FlexProps, Column, Row, styled, Input } from "@mpkelly/siam";
import { TextStyle } from "./PdfPrintStyles";
import { FontPicker } from "./FontPicker";
import { MarginPicker } from "./MarginPicker";

export interface PdfTextStylesProps extends FlexProps {
  styles: Map<string, TextStyle>;
  onChange(name: string, property: keyof TextStyle, value: any): void;
}

export const PdfTextStyles = (props: PdfTextStylesProps) => {
  const { styles, onChange, ...rest } = props;
  return (
    <Column {...rest}>
      {Array.from(styles.entries()).map((entry) => {
        return (
          <TextStyles
            mb="md"
            name={entry[0]}
            style={entry[1]}
            onChange={(property, value) => onChange(entry[0], property, value)}
          />
        );
      })}
    </Column>
  );
};

interface TextStyleProps extends FlexProps {
  style: TextStyle;
  name: string;
  onChange(property: keyof TextStyle, value: any): void;
}

const TextStyles = (props: TextStyleProps) => {
  const { name, style, onChange, ...rest } = props;
  return (
    <Container borderRadius="sm" border="1px solid dividers" p="sm" {...rest}>
      <Text textTransform="capitalize" mb="sm">
        {name} style
      </Text>
      <FontPicker
        value={style.font}
        onChange={(value) => onChange("font", value)}
        mb="md"
      />
      <Row mb="md" {...rest}>
        <Input
          type={"number"}
          value={style.fontSize}
          mr="sm"
          width="48%"
          labelKey="Font size (px)"
          onChange={(value: number) => onChange("fontSize", Number(value))}
        />
        <Input
          type={"number"}
          value={style.lineHeight}
          mr="sm"
          width="48%"
          labelKey="Line height"
          onChange={(value: number) => onChange("lineHeight", Number(value))}
        />
      </Row>
      <MarginPicker
        labelKey="Margin (pt)"
        margin={style.margin}
        onChange={(value) => onChange("margin", value)}
      />
    </Container>
  );
};

const Container = styled(Column)`
  .si-input-label {
    font-size: 10px;
  }
`;
