import React from "react";
import { FlexProps } from "@mpkelly/siam";
import { Page } from "../page/Page";

export interface TemplatePageProps extends FlexProps {}

export const TemplatePage = (props: TemplatePageProps) => {
  const { ...rest } = props;
  return <Page {...rest}></Page>;
};
