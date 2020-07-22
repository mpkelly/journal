import React, { Fragment } from "react";
import {
  Text,
  FlexProps,
  Column,
  Row,
  styled,
  Input,
  Icon,
  Show,
} from "@mpkelly/siam";
import { TextStyle } from "./PdfPrintStyles";
import { FontPicker } from "./FontPicker";
import { MarginPicker } from "./MarginPicker";
import useBoolean from "react-hanger/useBoolean";
import { Divider } from "../../components/divider/Divider";
import { Collapse } from "../../components/collapse/Collapse";

export interface PdfTextStylesProps extends FlexProps {
  styles: Map<string, TextStyle>;
  onChange(name: string, property: keyof TextStyle, value: any): void;
}

export const PdfTextStyles = (props: PdfTextStylesProps) => {
  const { styles, onChange, ...rest } = props;
  return (
    <Column {...rest}>
      {Array.from(styles.entries()).map((entry, index) => {
        const isNotLast = index + 1 < styles.size;
        return (
          <Fragment>
            <TextStyles
              name={entry[0]}
              style={entry[1]}
              onChange={(property, value) =>
                onChange(entry[0], property, value)
              }
            />
            <Show when={isNotLast}>
              <Divider my="md" />
            </Show>
          </Fragment>
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
    <Container borderRadius="sm" {...rest}>
      <Collapse
        title={
          <Text textTransform="capitalize" mb="sm" kind="small">
            {name} style
          </Text>
        }
        initialCollapsed
      >
        <FontPicker
          value={style.font}
          onChange={(value) => onChange("font", value)}
          mb="md"
        />
        <Row mb="lg" {...rest}>
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
        <Show when={style.margin}>
          <MarginPicker
            labelKey="Margin (pt)"
            margin={style.margin as any}
            onChange={(value) => onChange("margin", value)}
          />
        </Show>
      </Collapse>
    </Container>
  );
};

const Container = styled(Column)`
  .si-input-label {
    font-size: 10px;
  }
`;
