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
import { Page } from "../page/Page";

export interface LibraryPageProps extends FlexProps {}

export const LibraryPage = (props: LibraryPageProps) => {
  const { ...rest } = props;
  return <Page {...rest}></Page>;
};
