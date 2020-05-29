import React from "react";
import { Row, Icon, Text } from "@mpkelly/siam";
import { useUpload } from "../upload/Upload";
import { useImagePageState } from "./ImagePageState";
import { Pager } from "../../components/pager/Pager";
import { SearchInput } from "../../components/search-input/SearchInput";

export const ImagePageToolbar = () => {
  const {
    refresh,
    handleUpload,
    hasPrevious,
    hasNext,
    handleNext,
    handlePrevious,
    totalPages,
    searchCount,
    page,
    handleSearch,
  } = useImagePageState();
  const { openFileBrowser } = useUpload(handleUpload);

  return (
    <Row alignItems="center" mb={"lg"}>
      <Text kind="large" as="h1" labelKey="images" m={0} />
      <SearchInput
        mx="xxl"
        placeholder="Search by name or tag then hit enter"
        onSearch={handleSearch}
        resultCount={searchCount}
      />
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
