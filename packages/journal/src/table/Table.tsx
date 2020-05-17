import React, { ReactNode } from "react";
import { Text, FlexProps, styled, getStyles } from "@mpkelly/siam";

export interface TableColumn {
  key: string;
  nameKey?: string;
  name?: string;
  props?: any;
}

export interface TableProps extends FlexProps {
  columns: TableColumn[];
  children?: ReactNode;
}

export const Table = (props: TableProps) => {
  const { columns, rows, children, ...rest } = props;
  return (
    <TableContainer {...rest}>
      <thead>
        <tr className="header-row">
          {columns.map((column) => (
            <td className="header-cell" key={column.key}>
              <Text
                color="secondary.text"
                labelKey={column.nameKey || column.key}
              >
                {column.name}
              </Text>
            </td>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </TableContainer>
  );
};

export const TableContainer = styled.table`
  ${(props) => getStyles(props, "components.table")}
`;
