import React, { Fragment } from "react";
import { FlexProps } from "@mpkelly/siam";
import { Page } from "../page/Page";
import { Dialog } from "../../components/dialog/Dialog";
import { Show } from "../../util/Show";
import { TemplatePageCreateDialog } from "./TemplatePageCreateDialog";
import { PageTitle } from "../../components/page-title/PageTitle";
import {
  TemplatePageCreateDialogStateProvider,
  useTemplatePageCreateDialogState,
} from "./TemplatePageCreateDialogState";
import { TemplateGrid } from "./TemplateGrid";

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
  const {
    newFile,
    handleCreate,
    handleCancelCreate,
  } = useTemplatePageCreateDialogState();
  return (
    <Fragment>
      <Page size="100%" p="lg" {...rest}>
        <PageTitle iconName="template" labelKey="templates" />
        <TemplateGrid onCreate={handleCreate} />
      </Page>
      <Show when={newFile}>
        <Dialog
          onClickOutside={handleCancelCreate}
          width={650}
          maxHeight={500}
          gravity="top-center"
          mt="xxl"
        >
          <TemplatePageCreateDialog />
        </Dialog>
      </Show>
    </Fragment>
  );
};
