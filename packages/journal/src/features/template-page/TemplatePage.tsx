import React, { Fragment } from "react";
import { FlexProps, Row } from "@mpkelly/siam";
import { Page } from "../page/Page";
import { useTemplatePageState } from "./TemplatePageState";
import { TemplateCard } from "../template/TemplateCard";
import { Dialog } from "../../components/dialog/Dialog";
import { Show } from "../../util/Show";
import { TemplatePageCreateDialog } from "./TemplatePageCreateDialog";
import { PageTitle } from "../../components/page-title/PageTitle";
import {
  TemplatePageCreateDialogStateProvider,
  useTemplatePageCreateDialogState,
} from "./TemplatePageCreateDialogState";

export interface TemplatePageProps extends FlexProps {}

export const TemplatePage = (props: TemplatePageProps) => {
  return (
    <TemplatePageCreateDialogStateProvider>
      <PageContent {...props} />
    </TemplatePageCreateDialogStateProvider>
  );
};

const PageContent = (props: TemplatePageProps) => {
  const { ...rest } = props;
  const { templates, handleDelete, handleRename } = useTemplatePageState();
  const {
    newFile,
    handleCreate,
    handleCancelCreate,
  } = useTemplatePageCreateDialogState();
  return (
    <Fragment>
      <Page size="100%" p="lg" {...rest}>
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
      </Page>
      <Show when={newFile}>
        <Dialog
          onClickOutside={handleCancelCreate}
          width={650}
          maxHeight={500}
          gravity="top-center"
          p="xxl"
        >
          <TemplatePageCreateDialog />
        </Dialog>
      </Show>
    </Fragment>
  );
};
