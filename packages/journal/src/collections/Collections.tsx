import React, { useRef } from "react";
import { Column, Row, Text } from "udx-react";
import { CollectionTree } from "./CollectionTree";
import { useCollections } from "./CollectionContext";
import { IconButton } from "../icons/IconButton";
import { AddIcon } from "../icons/IconNames";

export const Collections = () => {
  const { collections, addCollection } = useCollections();
  const scroll = useRef<HTMLElement | null>();
  const handleAdd = () => {
    addCollection().then(() => {
      if (scroll.current) {
        scroll.current.scrollTop = scroll.current.scrollHeight;
      }
    });
  };
  return (
    <Column mt="lg" overflowY="hidden">
      <Row alignItems="center" justifyContent="space-between" mb="lg" px="lg">
        <Text
          labelKey="collections"
          variant="label"
          color="nav_secondaryText"
          mb={0}
        />
        <IconButton
          name={AddIcon}
          size="small"
          onClick={handleAdd}
          buttonProps={{ color: "nav_primaryText" }}
        />
      </Row>
      <Column overflowY="auto" flexGrow={1} ref={ref => (scroll.current = ref)}>
        {collections.map(collection => (
          <CollectionTree
            items={collection.content}
            id={collection.id}
            key={collection.id}
          />
        ))}
      </Column>
    </Column>
  );
};
