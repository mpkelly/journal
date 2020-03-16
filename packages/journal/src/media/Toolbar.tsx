import React from "react";
import { Row, H1, Picker, Icon, Text, Button } from "udx-react";
import { ChevronDownIcon, RefreshIcon, UploadIcon } from "../icons/IconNames";
import { useMedia } from "./MediaContext";
import { IconButton } from "../icons/IconButton";
import { useUpload } from "../upload/Upload";
import { Show } from "../util/Show";

export const Toolbar = () => {
  const {
    sortItem,
    sortItems,
    refresh,
    handleUpload,
    hasPrevious,
    hasNext,
    handleNextPage,
    handlePreviousPage,
    totalPages,
    currentPage
  } = useMedia();
  const { openFileBrowser } = useUpload(handleUpload);

  return (
    <Row alignItems="center" mb={"lg"}>
      <H1 labelKey="media" m={0} width={180} />
      <Show when={totalPages > 0}>
        <Row alignItems="center">
          <Show when={hasPrevious}>
            <Button
              onClick={handlePreviousPage}
              variant="muted.small"
              maxWidth={30}
            >
              <Icon name={"chevron-left"} />
            </Button>
          </Show>
          <Text mx="md">
            {currentPage} / {totalPages}
          </Text>
          <Show when={hasNext}>
            <Button
              onClick={handleNextPage}
              variant="muted.small"
              maxWidth={30}
            >
              <Icon name={"chevron-right"} />
            </Button>
          </Show>
        </Row>
      </Show>
      <Row alignItems="center" ml="auto">
        <IconButton
          color={"primaryText"}
          name={UploadIcon}
          onClick={openFileBrowser}
        />
        <IconButton
          color={"primaryText"}
          name={RefreshIcon}
          onClick={refresh}
          buttonProps={{ ml: "md" }}
        />
        <Picker
          ml="md"
          items={sortItems}
          menuLocation="bottom-end"
          selectedItem={sortItem}
          variant="muted"
        >
          <Text variant="small" color="inherit" fontWeight="bold">
            {sortItem.name}
          </Text>
          <Icon name={ChevronDownIcon} color="inherit" />
        </Picker>
      </Row>
    </Row>
  );
};
