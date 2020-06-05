import React from "react";
import { Row, Icon } from "@mpkelly/siam";
import { useUpload } from "../upload/Upload";
import { useImagePageState } from "./ImagePageState";
import { Pager } from "../../components/pager/Pager";
import { SearchInput } from "../../components/search-input/SearchInput";
import { PageTitle } from "../../components/page-title/PageTitle";

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
      <PageTitle labelKey="images" iconName="images" />
      <SearchInput
        mx="xxl"
        placeholderLabelKey="searchByTagOrName"
        onSearch={handleSearch}
        resultCount={searchCount}
        data-test="image-search"
      />
      <Row alignItems="center" ml="auto">
        <Icon
          kind="button"
          name={"upload"}
          data-test="upload-files"
          onClick={openFileBrowser}
        />
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
