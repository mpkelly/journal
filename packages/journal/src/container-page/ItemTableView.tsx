import React from "react";
import { Text, FlexProps, Column, Row } from "@mpkelly/siam";
import { ItemType } from "../content/ItemData";
import { TableColumn, Table } from "../table/Table";
import { ItemTableRowView } from "./ItemTableRowView";
import { Pager } from "../pager/Pager";
import { useContainerPage } from "../collection-page/ContainerPageContext";

export interface ItemTableViewProps extends FlexProps {}

export const ItemTableView = (props: ItemTableViewProps) => {
  const { ...rest } = props;
  const {
    hasNext,
    handleNext,
    hasPrevious,
    handlePrevious,
    items,
    count,
    page,
    totalPages,
  } = useContainerPage();

  const renderRows = () => {
    return items.map((item) => {
      switch (item.type) {
        case ItemType.Document:
          return (
            <ItemTableRowView
              icon={"document"}
              color={"document"}
              item={item}
            />
          );
        case ItemType.WikiPage:
          return (
            <ItemTableRowView
              icon={"wikipage"}
              color={"document"}
              item={item}
            />
          );
        case ItemType.Folder:
          return (
            <ItemTableRowView icon={"folder"} color={"folder"} item={item} />
          );
      }
    });
  };

  return (
    <Column {...rest} overflow="hidden">
      <Row gravity="center-start" mt="xxl">
        <Text color="secondary.text" labelKey={["items", count]} mb="lg" />
        <Pager
          ml="auto"
          hasNext={hasNext}
          hasPrevious={hasPrevious}
          onNext={handleNext}
          onPrevious={handlePrevious}
          page={page}
          totalPages={totalPages}
        />
      </Row>
      <Row width="100%" flexGrow={1} pb="lg" overflowY="auto">
        <Table columns={columns} width="100%" flexGrow={1}>
          {renderRows()}
        </Table>
      </Row>
    </Column>
  );
};

const columns: TableColumn[] = [
  {
    key: "",
  },
  {
    key: "name",
  },
  {
    key: "lastModified",
  },
  {
    key: "",
  },
];
