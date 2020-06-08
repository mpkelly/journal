import React, { Fragment } from "react";
import { Icon, FlexProps, Row, Header } from "@mpkelly/siam";
import { ReadOnlyButton } from "@mpkelly/react-editor-kit";
import useBoolean from "react-hanger/useBoolean";
import { Show } from "../../util/Show";
import { WikiPageHelpKeyShortcutDialog } from "./WikiPageHelpKeyShortcutDialog";

export interface WikiPageHeaderProps extends FlexProps {
  onToggleLocked(): void;
}

export const WikiPageHeader = (props: WikiPageHeaderProps) => {
  const { onToggleLocked, ...rest } = props;
  const showHelp = useBoolean(false);
  return (
    <Fragment>
      <Header
        flexDirection="row"
        gravity="center-end"
        position="absolute"
        right={0}
        pr="md"
        {...rest}
      >
        <Icon
          kind="button"
          name="help"
          onClick={showHelp.toggle}
          data-test="help-button"
        />
        <ReadOnlyButton
          className="material-icons-round"
          ligature="lock_open"
          readOnlyClassName="material-icons-round"
          readOnlyLigature="lock"
          onMouseDown={onToggleLocked}
        />
      </Header>
      <Show when={showHelp.value}>
        <WikiPageHelpKeyShortcutDialog onClose={showHelp.toggle} />
      </Show>
    </Fragment>
  );
};
