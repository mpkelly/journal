import React from "react";
import { Text, FlexProps, Column, Row } from "@mpkelly/siam";
import { FileType } from "../file/File";
import { TableColumn, Table } from "../../components/table/Table";
import { ContainerPageTableRow } from "./ContainerPageTableRow";
import { Pager } from "../../components/pager/Pager";
import { useContainerPageState } from "./ContainerPageState";

export interface ContainerPageTableProps extends FlexProps {}

export const ContainerPageTable = (props: ContainerPageTableProps) => {
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
  } = useContainerPageState();

  const renderRows = () => {
    return items.map((item) => {
      switch (item.type) {
        case FileType.Document:
          return (
            <ContainerPageTableRow
              icon={"document"}
              color={"secondary.text"}
              file={item}
            />
          );
        case FileType.WikiPage:
          return (
            <ContainerPageTableRow
              icon={"wikipage"}
              color={"secondary.text"}
              file={item}
            />
          );
        case FileType.Folder:
          return (
            <ContainerPageTableRow
              icon={"folder"}
              color={"folder"}
              file={item}
            />
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
