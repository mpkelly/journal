import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FlexProps } from "@mpkelly/siam";
import { Page } from "../page/Page";
import { EmptyView } from "../media/EmptyView";
import { useDatabase } from "../database/DatabaseState";

export interface LibraryPageProps extends FlexProps {}

export const LibraryPage = (props: LibraryPageProps) => {
  const { ...rest } = props;
  const db = useDatabase();
  const history = useHistory();
  useEffect(() => {
    db.getCollections().then((collections) => {
      if (collections.length) {
        history.push(`/library/view/${collections[0].id}`);
      }
    });
  });
  return (
    <Page {...rest}>
      <EmptyView labelKey="noCollections" icon="collection" />
    </Page>
  );
};
