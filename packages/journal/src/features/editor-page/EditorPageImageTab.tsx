import React from "react";
import { FlexProps, Column, Row, styled, getStyles } from "@mpkelly/siam";
import { useImageState } from "../images/ImageState";
import { getImageSource } from "../images/ImageTile";
import { SearchInput } from "../../components/search-input/SearchInput";
import { Pager } from "../../components/pager/Pager";

export interface EditorPageImageTabProps extends FlexProps {}

export const EditorPageImageTab = (props: EditorPageImageTabProps) => {
  const { ...rest } = props;
  const {
    images,
    handleSearch,
    searchCount,
    hasNext,
    hasPrevious,
    handleNext,
    handlePrevious,
    page,
    totalPages,
  } = useImageState();

  return (
    <Column {...rest} p="md" overflowY="hidden" borderLeft="1px solid dividers">
      <Row gravity="center-start" mb="lg">
        <SearchInput
          placeholder="Search by name or tag then hit enter"
          onSearch={handleSearch}
          resultCount={searchCount}
          flexGrow={1}
        />
        <Pager
          hasNext={hasNext}
          hasPrevious={hasPrevious}
          onNext={handleNext}
          onPrevious={handlePrevious}
          totalPages={totalPages}
          page={page}
        />
      </Row>
      <Column flexGrow={1} overflowY={"auto"}>
        {images.map((image) => (
          <Image src={getImageSource(image)} mb="md" key={image.id} mx="auto" />
        ))}
      </Column>
    </Column>
  );
};

const Image = styled.img<FlexProps>`
  max-width: 100%;
  ${getStyles}
`;
