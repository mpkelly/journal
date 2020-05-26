import React from "react";
import { Text, Switch, Icon, FlexProps, Select } from "@mpkelly/siam";
import { CodeFile } from "../code-editor/CodeFile";
import { useCodePageState } from "./CodePageState";
import { stopEvent } from "@mpkelly/react-editor-kit";

export interface CodePageTableRowProps extends FlexProps {
  codeFile: CodeFile;
}

export const CodePageTableRow = (props: CodePageTableRowProps) => {
  const { codeFile } = props;
  //TODO use correct last modified date
  const {
    handleDeleteFile,
    handleEdit,
    handleToggleGlobal,
  } = useCodePageState();

  const menuItems = [{ labelKey: "delete", iconName: "delete" }];

  return (
    <tr className="row" key={codeFile.id}>
      <td className="cell">
        <Icon name={"code"} color={"muted"} />
      </td>
      <td className="cell">
        <Text
          color="accent"
          cursor="pointer"
          onClick={() => handleEdit(codeFile)}
        >
          {codeFile.name}
        </Text>
      </td>
      <td className="cell">
        <Text>2 days ago</Text>
      </td>
      <td className="cell" onClick={stopEvent}>
        <Switch
          checked={codeFile.global}
          onChange={() => handleToggleGlobal(codeFile)}
        />
      </td>
      <td className="cell">
        <Select
          items={menuItems}
          onItemClicked={() => handleDeleteFile(codeFile.id)}
          location="start"
        >
          <Icon name={"more"} kind="button" ml="auto" />
        </Select>
      </td>
    </tr>
  );
};
