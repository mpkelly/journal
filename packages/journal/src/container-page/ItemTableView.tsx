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
  } = useContainerPage();

  const renderRows = () => {
    return items.map((item) => {
      switch (item.type) {
        case ItemType.Page:
          return <ItemTableRowView icon={"file"} color={"file"} item={item} />;
        case ItemType.Folder:
          return (
            <ItemTableRowView icon={"folder"} color={"folder"} item={item} />
          );
      }
    });
  };

  return (
    <Column {...rest}>
      <Row gravity="center-start" mt="xxl">
        <Text color="secondary.text" labelKey="files" mb="lg" />
        <Pager
          ml="auto"
          hasNext={hasNext}
          hasPrevious={hasPrevious}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      </Row>
      <Table columns={columns} mb="lg">
        {renderRows()}
      </Table>
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
