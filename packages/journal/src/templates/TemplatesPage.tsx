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

export interface TemplatesPageProps extends FlexProps {}

export const TemplatesPage = (props: TemplatesPageProps) => {
  const { ...rest } = props;
  return <Page {...rest}></Page>;
};
