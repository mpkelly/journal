import React from "react";
import { HashRouter, Redirect, Switch as Match, Route } from "react-router-dom";
import { SettingsPage } from "../settings/SettingsPage";
import { MediaPage } from "../media/MediaPage";
import { ContentPage } from "../content/ContentPage";
import { LibraryPage } from "../library/LibraryPage";
import { TemplatesPage } from "../templates/TemplatesPage";

export const Router = () => {
  return (
    <HashRouter>
      <Match>
        <Route exact path={"/library"} component={LibraryPage} />
        <Route exact path={"/library/view/:itemId"} component={ContentPage} />
        <Route exact path={"/templates"} component={TemplatesPage} />
        <Route exact path={"/media/images"} component={MediaPage} />
        <Route exact path={"/media/videos"} component={MediaPage} />
        <Route exact path={"/settings/general"} component={SettingsPage} />
        <Route exact path={"/settings/theme"} component={SettingsPage} />

        <Redirect from="*" to={"/media/images"} />
      </Match>
    </HashRouter>
  );
};
