import React, { useState, useEffect } from "react";
import { HashRouter, Redirect, Switch, Route } from "react-router-dom";
import { Siam, Row } from "@mpkelly/siam";
import { Style } from "./ui-system/Style";
import { JournalSystem } from "./ui-system/JournalSystem";
import { FileUpload } from "./features/upload/FileUpload";
import { SettingsProvider } from "./features/settings/SettingsContext";
import { Navigation } from "./features/navigation/Navigation";
import { FilePage } from "./features/file-page/FilePage";
import { CodePage } from "./features/code-page/CodePage";
import { TemplatePage } from "./features/template-page/TemplatePage";
import { SettingsPage } from "./features/settings/SettingsPage";
import { ImagePage } from "./features/image-page/ImagePage";
import { LibraryPage } from "./features/library/LibraryPage";
import { insertDefaultDbContent } from "./features/database/JournalDatabase";
import db from "./features/database/Dexie";
import { JournalHelp } from "./features/help/Help";

export const App = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    db.open().then(async () => {
      await insertDefaultDbContent();
      setReady(true);
    });
  }, []);

  if (!ready) {
    return null;
  }

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
    <Row width="100vw" height="100vh" background="background">
      <Navigation width={280} height={"100vh"} maxHeight="100vh" />
      <Switch>
        <Route exact path={"/library"} component={LibraryPage} />
        <Route exact path={"/library/view/:fileId"} component={FilePage} />
        <Route exact path={"/code"} component={CodePage} />
        <Route exact path={"/templates"} component={TemplatePage} />
        <Route exact path={"/templates/edit/:fileId"} component={FilePage} />
        <Route exact path={"/media/images"} component={ImagePage} />
        <Route exact path={"/settings/general"} component={SettingsPage} />
        <Redirect from="*" to={"/media/images"} />
      </Switch>
    </Row>
  </HashRouter>
);
