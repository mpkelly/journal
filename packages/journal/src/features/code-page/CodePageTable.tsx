import React, { Fragment } from "react";
import { Text, FlexProps, Column, Row } from "@mpkelly/siam";
import { TableColumn, Table } from "../../components/table/Table";
import { useCodePageState } from "./CodePageState";
import { CodePageTableRow } from "./CodePageTableRow";
import { CodePageEditorDialog } from "./CodePageEditorDialog";
import { Show } from "../../util/Show";
import { DeleteDialog } from "../../components/dialog/DeleteDialog";
import { CodeType } from "../code-editor/CodeFile";

export interface CodePageTableProps extends FlexProps {}

export const CodePageTable = (props: CodePageTableProps) => {
  const { ...rest } = props;
  const {
    codeFiles,
    activeCodeFile,
    handleEdit,
    itemToDelete,
    handleCancelDelete,
    handleConfirmDelete,
  } = useCodePageState();

  const renderRows = () => {
    return codeFiles.map((codeFile) => {
      switch (codeFile.type) {
        case CodeType.Css:
          return <CodePageTableRow codeFile={codeFile} icon={"style"} />;
        case CodeType.JavaScript:
          return <CodePageTableRow codeFile={codeFile} icon={"execute"} />;
      }
    });
  };
  return (
    <Fragment>
      <Column {...rest}>
        <Row gravity="center-start" mt="xxl">
          <Text
            color="secondary.text"
            labelKey={["items", codeFiles.length]}
            mb="lg"
          />
        </Row>
        <Row width="100%" flexGrow={1} pb="lg" overflowY="auto">
          <Table columns={columns} width="100%" flexGrow={1}>
            {renderRows()}
          </Table>
        </Row>
      </Column>
      <Show when={activeCodeFile}>
        <CodePageEditorDialog onClose={() => handleEdit(undefined)} />
      </Show>
      <Show when={itemToDelete}>
        <DeleteDialog
          onDelete={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      </Show>
    </Fragment>
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
    key: "default",
  },
  {
    key: "",
  },
];
