import * as React from "react";
import { Siam, Row } from "@mpkelly/siam";
import { HashRouter, Redirect, Switch, Route } from "react-router-dom";
import { Style } from "./ui-system/Style";
import { FileUpload } from "./features/upload/FileUpload";
import { SettingsProvider } from "./features/settings/SettingsContext";
import { JournalSystem } from "./ui-system/JournalSystem";
import { Navigation } from "./features/navigation/Navigation";
import { LibraryPage } from "./features/library/LibraryPage";
import { FilePage } from "./features/file-page/FilePage";
import { CodePage } from "./features/code-page/CodePage";
import { TemplatePage } from "./features/template-page/TemplatePage";
import { MediaPage } from "./features/media/MediaPage";
import { SettingsPage } from "./features/settings/SettingsPage";

export const App = () => {
  return (
    <Siam system={JournalSystem}>
      <SettingsProvider>
        <Style />
        <AppContent />
        <FileUpload />
      </SettingsProvider>
    </Siam>
  );
};

const AppContent = () => (
  <HashRouter>
    <Row width="100vw" height="100vh">
      <Navigation width={280} height={"100vh"} maxHeight="100vh" />
      <Switch>
        <Route exact path={"/library"} component={LibraryPage} />
        <Route exact path={"/library/view/:fileId"} component={FilePage} />
        <Route exact path={"/code"} component={CodePage} />
        <Route exact path={"/templates"} component={TemplatePage} />
        <Route exact path={"/templates/edit/:fileId"} component={FilePage} />
        <Route exact path={"/media/images"} component={MediaPage} />
        <Route exact path={"/media/videos"} component={MediaPage} />
        <Route exact path={"/settings/general"} component={SettingsPage} />
        <Route exact path={"/settings/theme"} component={SettingsPage} />

        <Redirect from="*" to={"/media/images"} />
      </Switch>
    </Row>
  </HashRouter>
);
