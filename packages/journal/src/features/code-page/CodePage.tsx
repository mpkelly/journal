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

export interface CodePageProps extends FlexProps {}

export const CodePage = (props: CodePageProps) => {
  const { ...rest } = props;
  return (
    <Page position="relative" overflow="hidden">
      <Column>
        <Text>Code Page</Text>
      </Column>
    </Page>
  );
};
