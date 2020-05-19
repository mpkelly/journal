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
  useSiam,
} from "@mpkelly/siam";
import { Page } from "../page/Page";
import { WikiEditor } from "./WikiEditor";
import { ItemData } from "../content/ItemData";

export interface WikiPageProps extends FlexProps {
  item: ItemData;
}

export const WikiPage = (props: WikiPageProps) => {
  const { item, ...rest } = props;
  const { system } = useSiam();
  return (
    <Page {...rest} position="relative">
      <Row mx="auto">
        <WikiEditor system={system} item={item} />
      </Row>
    </Page>
  );
};
