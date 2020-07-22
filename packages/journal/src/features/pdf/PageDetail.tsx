import React from "react";
import {
  FlexProps,
  Column,
  Row,
  Text,
  Input,
  Checkbox,
  styled,
} from "@mpkelly/siam";
import { MarginPicker } from "./MarginPicker";

export interface PageDetailProps extends FlexProps {
  detail: PageDetailModel;
  onChange(detail: PageDetailModel): void;
}

export const PageDetail = (props: PageDetailProps) => {
  const { detail, onChange, ...rest } = props;
  const { columns, margin, enabled } = detail;

  const handleEnabledChange = (enabled: boolean) => {
    onChange({ ...detail, enabled });
  };

  const handleMarginChange = (margin: number[]) => {
    onChange({ ...detail, margin });
  };

  const handleColumnChange = (
    property: keyof ColumnModel,
    value: any,
    index: number
  ) => {
    const columns = detail.columns.slice();
    (columns[index][property] as any) = value;
    onChange({ ...detail, columns });
  };

  return (
    <Column {...rest}>
      <ColumnContainer mb="md">
        {columns.map((column, index) => (
          <Row key={index} mb="sm">
            <Input
              labelKey={["col", index + 1]}
              value={column.text}
              placeholder={"{page} and {totalPages} supported"}
              onChange={(value: string) =>
                handleColumnChange("text", value, index)
              }
              mr="sm"
              flexGrow={1}
            />
            <Input
              width={50}
              labelKey={"width %"}
              type={"number"}
              placeholderLabelKey="auto"
              value={Number.parseInt(column.width)}
              onChange={(value: string) =>
                handleColumnChange("width", `${value}%`, index)
              }
              ml="sm"
            />
          </Row>
        ))}
      </ColumnContainer>
      <MarginPicker margin={margin} onChange={handleMarginChange} />
      <Row mt="md">
        <Checkbox checked={enabled} onChange={handleEnabledChange} />
        <Text kind="small" color="secondary.text" labelKey="enabled" ml="sm" />
      </Row>
    </Column>
  );
};

const ColumnContainer = styled(Column)<{ count: number }>`
  .si-input-label {
    font-size: 10px;
  }
`;

type ColumnModel = {
  text: string;
  alignment: any;
  width?: any;
  height?: any;
};

export type PageDetailModel = {
  columns: ColumnModel[];
  margin: number[];
  enabled: boolean;
};
