import React from "react";
import { Row, Icon, Header } from "@mpkelly/siam";
import { useUpload } from "../upload/Upload";
import { useImagePageState } from "./ImagePageState";
import { Pager } from "../../components/pager/Pager";
import { SearchInput } from "../../components/search-input/SearchInput";
import { PageTitle } from "../../components/page-title/PageTitle";

export const ImagePageHeader = () => {
  const {
    handleSort,
    handleRefresh,
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
    <Header flexDirection="row" alignItems="center" mb={"lg"}>
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
        <Icon kind="button" name={"sort"} onClick={handleSort} ml="md" />
        <Icon kind="button" name={"refresh"} onClick={handleRefresh} mx="md" />
        <Pager
          hasNext={hasNext}
          hasPrevious={hasPrevious}
          onNext={handleNext}
          onPrevious={handlePrevious}
          totalPages={totalPages}
          page={page}
        />
      </Row>
    </Header>
  );
};
