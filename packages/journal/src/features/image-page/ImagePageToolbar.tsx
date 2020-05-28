import React from "react";
import { Row, Icon, Text, Button } from "@mpkelly/siam";
import { useUpload } from "../upload/Upload";
import { useImagePageState } from "./ImagePageState";
import { Pager } from "../../components/pager/Pager";

export const ImagePageToolbar = () => {
  const {
    refresh,
    handleUpload,
    hasPrevious,
    hasNext,
    handleNext,
    handlePrevious,
    totalPages,
    page,
  } = useImagePageState();
  const { openFileBrowser } = useUpload(handleUpload);

  return (
    <Row alignItems="center" mb={"lg"}>
      <Text kind="large" as="h1" labelKey="images" m={0} />
      <Row alignItems="center" ml="auto">
        <Icon kind="button" name={"upload"} onClick={openFileBrowser} />
        <Icon kind="button" name={"refresh"} onClick={refresh} mx="md" />
        <Pager
          hasNext={hasNext}
          hasPrevious={hasPrevious}
          onNext={handleNext}
          onPrevious={handlePrevious}
          totalPages={totalPages}
          page={page}
        />
      </Row>
    </Row>
  );
};
