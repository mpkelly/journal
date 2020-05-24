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

export interface EmptyStateViewProps extends FlexProps {
  icon: string;
  labelKey: string;
}

export const EmptyStateView = (props: EmptyStateViewProps) => {
  const { icon, labelKey, ...rest } = props;
  return (
    <Column size="100%" gravity={"center"} pointerEvents="none" {...rest}>
      <Column gravity={"center"}>
        <Icon kind="large" color="secondary.text" name={icon} />
        <Text kind="large" color="secondary.text" labelKey={labelKey} />
      </Column>
    </Column>
  );
};
