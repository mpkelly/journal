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
        {...rest}
      >
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
  "#f6e58d",
  "#ffbe76",
  "#ff7979",
  "#badc58",
  "#ffffff",
  "#f9ca24",
  "#eb4d4b",
  "#f0932b",
  "#6ab04c",
  "#c7ecee",
  "#7ed6df",
  "#e056fd",
  "#686de0",
  "#95afc0",
  "#22a6b3",
  "#be2edd"
];

export const ExtendedColors = Colors.concat([
  "#4834d4",
  "#535c68",
  "#4C5ADE",
  "#130f40"
]);
