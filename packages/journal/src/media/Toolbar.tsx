import React from "react";
import { Row, H1, Picker, Icon, Text } from "udx-react";
import { ChevronDownIcon, RefreshIcon, UploadIcon } from "../icons/IconNames";
import { useMedia } from "./MediaContext";
import { IconButton } from "../icons/IconButton";
import { useUpload } from "../upload/Upload";

export const Toolbar = () => {
  const { sortItem, sortItems, refresh, handleUpload } = useMedia();
  const { openFileBrowser } = useUpload(handleUpload);

  return (
    <Row alignItems="center" mb={"lg"}>
      <H1 labelKey="media" m={0} />
      <Row alignItems="center" ml="auto">
        <IconButton
          color={"primaryText"}
          name={UploadIcon}
          onClick={openFileBrowser}
        />
        <IconButton
          ml="md"
          color={"primaryText"}
          name={RefreshIcon}
          onClick={refresh}
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
