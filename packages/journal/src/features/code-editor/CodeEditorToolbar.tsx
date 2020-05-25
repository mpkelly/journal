import React from "react";
import {
  Text,
  Icon,
  FlexProps,
  Row,
  MenuItemModel,
  Select,
  Button,
  styled,
} from "@mpkelly/siam";
import { CodeFile, CodeType } from "./CodeFile";
import { Show } from "../../util/Show";
import { useCodeEditorState } from "../editor-page/EditorPageState";

export interface CodeEditorToolbarProps extends FlexProps {}

export const CodeEditorToolbar = (props: CodeEditorToolbarProps) => {
  const { ...rest } = props;
  const {
    codes,
    activeCode,
    handleCreate,
    handleSetActive,
    handleExecuteCode,
    handleUnlinkCode,
  } = useCodeEditorState();
  const isCodeActive = activeCode?.type === CodeType.JavaScript;

  const menuItems: MenuItemModel[] = [
    {
      iconName: "code",
      labelKey: "linkExisting",
    },
    {
      iconName: "style",
      labelKey: "addNewStyle",
      codeType: CodeType.Css,
    },
    {
      iconName: "execute",
      labelKey: "addScript",
      codeType: CodeType.JavaScript,
    },
  ];

  return (
    <Row {...rest} gravity="center-start" height={50} p="sm">
      <Tabs gravity="center-start" flexGrow={1} overflowX="auto">
        {codes.map((code) => (
          <Tab
            code={code}
            selected={code == activeCode}
            onClick={() => handleSetActive(code)}
            onDelete={() => handleUnlinkCode(code)}
          />
        ))}
      </Tabs>
      <Show when={isCodeActive}>
        <Button
          maxWidth={30}
          maxHeight={24}
          mx="sm"
          onClick={handleExecuteCode}
          gravity="center"
        >
          <Icon kind="small" name="execute" />
        </Button>
      </Show>
      <Select
        items={menuItems}
        ml="auto"
        onItemClicked={(item: MenuItemModel) => handleCreate(item.codeType)}
      >
        <Icon kind="button" name="add" />
      </Select>
    </Row>
  );
};

interface TabProps extends FlexProps {
  code: CodeFile;
  onClick(): void;
  onDelete(): void;
}

const Tab = (props: TabProps) => {
  const { code, onDelete, ...rest } = props;
  return (
    <Row
      key={code.id}
      gravity={"center"}
      activeBackgroundColor="background-light1"
      hoverBackgroundColor="background-light1"
      selectedBackgroundColor="background-light1"
      selectedColor="primary.text"
      color="secondary.text"
      height={30}
      p="md"
      flexShrink={0}
      wordWrap={"nowrap"}
      cursor="pointer"
      {...rest}
    >
      <Text kind="small" color="inherit">
        {code.name}
      </Text>
      <Show when={props.selected}>
        <Icon
          name="clear"
          color="secondary.text"
          kind="xsmall"
          ml="md"
          onClick={(e: React.MouseEvent) => {
            e.stopPropagation();
            onDelete();
          }}
        />
      </Show>
    </Row>
  );
};

const Tabs = styled(Row)`
  ::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
`;
