import React from "react";
import {
  Text,
  Button,
  Input,
  Badge,
  Label,
  Switch,
  Checkbox,
  Radio,
  Slider,
  Tooltip,
  Icon,
  FlexProps,
  ElementProps,
  Portal,
  Column,
  Row,
  Section,
  Main,
  Aside,
  Nav,
  Footer,
  Article,
} from "@mpkelly/siam";
import { ItemData } from "../content/ItemData";

export interface EmptyCollectionViewProps extends FlexProps {
  item: ItemData;
}

export const EmptyCollectionView = (props: EmptyCollectionViewProps) => {
  const { ...rest } = props;
  return <Column {...rest}></Column>;
};
