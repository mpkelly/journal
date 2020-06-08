import React from "react";
import { FlexProps, Row } from "@mpkelly/siam";
import { TableColumn, Table } from "../../components/table/Table";
import { useVariableTableState } from "./VariableTableState";
import { VariableTableRow } from "./VariableTableRow";

export interface VariableTableProps extends FlexProps {}

export const VariableTable = (props: VariableTableProps) => {
  const { ...rest } = props;
  const { variables } = useVariableTableState();

  const renderRows = () => {
    return variables.map((variable) => (
      <VariableTableRow variable={variable} currentValue="--" />
    ));
  };

  return (
    <Row width="100%" flexGrow={1} pb="lg" overflowY="auto" {...rest}>
      <Table
        columns={columns}
        width="100%"
        flexGrow={1}
        styles={{
          cell: {
            height: 50,
          },
        }}
      >
        {renderRows()}
      </Table>
    </Row>
  );
};

const columns: TableColumn[] = [
  {
    key: "name",
  },
  {
    key: "optionalParameter",
  },
  {
    key: "patterns",
  },
  {
    key: "currentValue",
  },
  {
    key: "",
  },
];
