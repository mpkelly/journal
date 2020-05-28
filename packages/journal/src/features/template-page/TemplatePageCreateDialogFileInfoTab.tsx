import React, { Fragment } from "react";
import { Text, Button, Input, Row } from "@mpkelly/siam";
import { CollectionsTreeSelect } from "../collections-tree/CollectionsTreeSelect";
import { useTemplatePageCreateDialogState } from "./TemplatePageCreateDialogState";

export const TemplatePageCreateDialogFileInfoTab = () => {
  const {
    newFile,
    handleUpdateNewFile,
    handleCancelCreate,
    handleNextTab,
    collections,
  } = useTemplatePageCreateDialogState();

  if (!collections) {
    return null;
  }

  const destination =
    collections?.find((node) => node.id === newFile?.parentId) ||
    collections[0];

  console.log("2", newFile?.parentId, destination);

  return (
    <Fragment>
      <Input
        labelKey="fileName"
        value={newFile?.name}
        onChange={(name: string) => handleUpdateNewFile({ name })}
        mb="lg"
      />
      <Text kind="label" labelKey="destination" mb="sm" />
      <CollectionsTreeSelect
        maxHeight={180}
        overflowY="auto"
        backgroundColor="background"
        mb="lg"
        px="md"
        nodes={collections}
        selected={destination}
        onChange={(node) => {
          handleUpdateNewFile({ parentId: node.id });
        }}
      />
      <Row mt="xl">
        <Button kind="text" labelKey="cancel" onClick={handleCancelCreate} />
        <Button labelKey="next" ml="auto" onClick={handleNextTab} />
      </Row>
    </Fragment>
  );
};
