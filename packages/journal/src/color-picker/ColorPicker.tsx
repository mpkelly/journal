import React from "react";
import { FlexProps, Row } from "udx-react";
import { Overlay } from "../util/Overlay";

export interface ColorPickerProps extends FlexProps {
  selectedColor: string;
  onColorChange(color: string): any;
  onClose(): any;
}

export const ColorPicker = (props: ColorPickerProps) => {
  const { selectedColor, onColorChange, onClose, ...rest } = props;
  return (
    <Overlay onClick={onClose}>
      <Row
        p={4}
        flexWrap={"wrap"}
        width={120}
        boxShadow={0}
        backgroundColor="background"
        {...rest}>
        {Colors.map(color => (
          <Row
            flexShrink={0}
            m={4}
            size={20}
            backgroundColor={color}
            borderRadius="sm"
            border="2px solid"
            hoverBorderColor={"muted"}
            borderColor={color == selectedColor ? "dark" : "transparent"}
            cursor={"pointer"}
            onClick={() => onColorChange(color)}
          />
        ))}
      </Row>
    </Overlay>
  );
};

export const Colors = [
  "#F10E23",
  "#F2E437",
  "#F4AD2C",
  "#F07426",
  "#547D8E",
  "#179DA4",
  "#FEC300",
  "#3EC380",
  "pink",
  "violet",
  "amber",
  "chocolate"
];
