import React from "react";
import { HashRouter, Redirect, Switch as Match, Route } from "react-router-dom";
import { SettingsPage } from "../settings/SettingsPage";
import { MediaPage } from "../media/MediaPage";
import { FilePage } from "../file-page/FilePage";
import { LibraryPage } from "../library/LibraryPage";
import { TemplatePage } from "../template-page/TemplatePage";
import { CodePage } from "../code-page/CodePage";

export const Router = () => {
  return (
    <HashRouter>
      <Match>
        <Route exact path={"/library"} component={LibraryPage} />
        <Route exact path={"/library/view/:fileId"} component={FilePage} />
        <Route exact path={"/code"} component={CodePage} />
        <Route exact path={"/templates"} component={TemplatePage} />
        <Route exact path={"/media/images"} component={MediaPage} />
        <Route exact path={"/media/videos"} component={MediaPage} />
        <Route exact path={"/settings/general"} component={SettingsPage} />
        <Route exact path={"/settings/theme"} component={SettingsPage} />

        <Redirect from="*" to={"/media/images"} />
      </Match>
    </HashRouter>
  );
};
