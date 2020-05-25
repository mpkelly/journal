import React, { Fragment } from "react";
import useBoolean from "react-hanger/useBoolean";
import { Button, FlexProps, Column, Show } from "@mpkelly/siam";
import { TemplateCreateDialog } from "../template/TemplateCreateDialog";
import { Overlay } from "../../components/dialog/Overlay";
import { CreateTemplateInfo } from "../template/TemplateInfo";
import { File } from "../file/File";
import { Dialog } from "../../components/dialog/Dialog";

export interface EditorPageTemplatesTabProps extends FlexProps {
  file: File;
}

export const EditorPageTemplatesTab = (props: EditorPageTemplatesTabProps) => {
  const { file, ...rest } = props;
  const create = useBoolean(false);

  return (
    <Fragment>
      <Column {...rest} p="md" borderLeft="1px solid dividers">
        <Button labelKey="createTemplate" onClick={create.toggle} />
        <CreateTemplateInfo />
      </Column>
      <Show when={create.value}>
        <Dialog onClickOutside={create.toggle}>
          <TemplateCreateDialog file={file} onCancel={create.toggle} />
        </Dialog>
      </Show>
    </Fragment>
  );
};
