import React from "react";
import { HashRouter, Redirect, Switch as Match, Route } from "react-router-dom";
import { EditorPage } from "../editor/EditorPage";
import { SettingsPage } from "../settings/SettingsPage";
import { MediaPage } from "../media/MediaPage";

export const Router = () => {
  return (
    <HashRouter>
      <Match>
        <Route exact path={"/settings/general"} component={SettingsPage} />
        <Route exact path={"/settings/theme"} component={SettingsPage} />
        <Route exact path={"/media/images"} component={MediaPage} />
        <Route exact path={"/media/videos"} component={MediaPage} />
        <Route
          exact
          path={"/edit/:collectionId/:itemId"}
          component={EditorPage}
        />
        <Redirect from="*" to={"/media/images"} />
      </Match>
    </HashRouter>
  );
};

export const isRouteSelected = (route: string) => {
  return location.href.includes(route);
};
