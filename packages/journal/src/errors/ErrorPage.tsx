import React from "react";
import { Row, Icon, Column, Text, Button } from "@mpkelly/siam";

export interface ErrorPageProps {
  handleGoBack(): void;
}

export const ErrorPage = (props: ErrorPageProps) => {
  const { handleGoBack } = props;
  return (
    <Row
      width={"100%"}
      height={"100%"}
      flex={1}
      justifyContent="center"
      alignItems="center"
    >
      <Column alignItems="flex-start">
        <Icon name={"error"} color="danger" kind="xlarge" />
        <Text mt="xl" kind="xxlarge" labelKey="somethingWentWrong" />
        <Text
          mt="md"
          color="secondary"
          kind="xlarge"
          labelKey="unexpectedError"
          maxWidth={600}
        />
        <Button mt="xl" labelKey={"goBack"} onClick={handleGoBack} />
      </Column>
    </Row>
  );
};
