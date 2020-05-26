import React, { Fragment } from "react";
import { FlexProps, Column, Text, Row, Icon } from "@mpkelly/siam";
import { Page } from "../page/Page";
import { useTemplatePageState } from "./TemplatePageState";
import { TemplateCard } from "../template/TemplateCard";
import { Dialog } from "../../components/dialog/Dialog";
import { Show } from "../../util/Show";
import { TemplatePageCreateDialog } from "./TemplatePageCreateDialog";
import { File } from "../file/File";
import { PageTitle } from "../../components/page-title/PageTitle";

export interface TemplatePageProps extends FlexProps {}

export const TemplatePage = (props: TemplatePageProps) => {
  const { ...rest } = props;
  const {
    templates,
    newFile,
    handleConfirmCreate,
    handleCancelCreate,
    handleCreate,
    handleDelete,
    handleRename,
    substitutions,
  } = useTemplatePageState();
  return (
    <Fragment>
      <Page {...rest}>
        <Column size="100%" p="lg">
          <PageTitle iconName="template" labelKey="templates" />
          <Row
            flexWrap="wrap"
            mt="xxl"
            width="100%"
            flexGrow={1}
            alignContent="flex-start"
          >
            {templates.map((template) => {
              return (
                <TemplateCard
                  template={template}
                  onCreate={() => handleCreate(template)}
                  onDelete={() => handleDelete(template.id)}
                  onRename={(name) => handleRename(template.id, name)}
                  key={template.id}
                />
              );
            })}
          </Row>
        </Column>
      </Page>
      <Show when={newFile}>
        <Dialog
          onClickOutside={handleCancelCreate}
          width={650}
          maxHeight={500}
          gravity="top-center"
          p="xxl"
        >
          <TemplatePageCreateDialog
            file={newFile as File}
            substitutions={substitutions}
            onConfirm={handleConfirmCreate}
            onCancel={handleCancelCreate}
          />
        </Dialog>
      </Show>
    </Fragment>
  );
};
