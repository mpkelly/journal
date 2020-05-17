import React from "react";
import { Row, Icon, Text, Button } from "@mpkelly/siam";
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
    currentPage,
  } = useMedia();
  const { openFileBrowser } = useUpload(handleUpload);

  return (
    <Row alignItems="center" mb={"lg"}>
      <Text as="h1" labelKey="media" m={0} width={180} />
      <Show when={totalPages > 0}>
        <Row alignItems="center">
          <Show when={hasPrevious}>
            <Button
              onClick={handlePreviousPage}
              kind="muted.small"
              maxWidth={30}
            >
              <Icon name={"chevron-left"} />
            </Button>
          </Show>
          <Text mx="md">
            {currentPage} / {totalPages}
          </Text>
          <Show when={hasNext}>
            <Button onClick={handleNextPage} kind="muted.small" maxWidth={30}>
              <Icon name={"chevron-right"} />
            </Button>
          </Show>
        </Row>
      </Show>
      <Row alignItems="center" ml="auto">
        <Icon kind="button" name={"upload"} onClick={openFileBrowser} />
        <Icon kind="button" name={"refresh"} onClick={refresh} ml="md" />
        //TODO
        {/* <Picker
          ml="md"
          items={sortItems}
          menuLocation="bottom-end"
          selectedItem={sortItem}
          kind="muted"
        >
          <Text kind="small" color="inherit" fontWeight="bold">
            {sortItem.name}
          </Text>
          <Icon name={ChevronDownIcon} color="inherit" />
        </Picker> */}
      </Row>
    </Row>
  );
};
