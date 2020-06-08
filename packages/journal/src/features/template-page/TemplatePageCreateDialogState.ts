import { useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import constate from "constate";
import { FlatNode } from "@mpkelly/react-tree";
import { Element, Node } from "@mpkelly/react-editor-kit";
import { useDatabase } from "../database/DatabaseState";
import { File, FileType } from "../file/File";
import { newId } from "../../util/Identity";

import {
  Substitution,
  findSubstitutions,
  applySubstitutions,
} from "../substitution/Substitution";
import { VariableType } from "../variables/Variable";
import { Database } from "../database/Database";
import { CollectionChangedEvent } from "../collections-tree/CollectionsChangedEvent";

export enum Tabs {
  FileInfo = 0,
  Substitutions = 1,
}

export const templatePageCreateDialogState = () => {
  const db = useDatabase();
  const [tab, setTab] = useState(Tabs.FileInfo);
  const [newFile, setNewFile] = useState<File>();
  const [substitutions, setSubstitutions] = useState<Substitution[]>([]);
  const [collections, setCollections] = useState<FlatNode[]>();
  const history = useHistory();
  const hasNextTab = substitutions.length > 0;

  useEffect(() => {
    //TODO move filtering into DB
    db.getCollections().then((collections) =>
      setCollections(
        collections.filter(
          (collection) =>
            collection.type === FileType.Collection ||
            collection.type === FileType.Folder
        )
      )
    );
  }, []);

  const handleCreate = async (template: File) => {
    const id = newId();
    const file = { ...template, template: false, id };
    const variables = await db.getVariables();
    setSubstitutions(
      findSubstitutions((file.data as Element[]) || [], variables)
    );

    setNewFile(file);
  };

  const handleSubstitutionChange = (index: number, value: string) => {
    setSubstitutions((current) => {
      const next = current.slice();
      next[index].value = value;
      return next;
    });
  };

  const handleUpdateNewFile = (changes: Partial<File>) => {
    setNewFile((current) => ({ ...(current as File), ...changes }));
  };

  const handleCancelCreate = () => {
    setNewFile(undefined);
    setTab(Tabs.FileInfo);
  };

  const handleConfirmCreate = useCallback(() => {
    if (newFile) {
      applySubstitutions((newFile.data as Node[]) || [], substitutions);
      incrementCounters(substitutions, db);
      db.addFile(newFile)
        .then(CollectionChangedEvent)
        .then(() => {
          history.push(`/library/view/${newFile.id}`);
        });
    }
  }, [newFile, substitutions]);

  const handleNextTab = () => {
    if (hasNextTab) {
      setTab((tab) => tab + 1);
    } else {
      handleConfirmCreate();
    }
  };

  return {
    tab,
    newFile,
    substitutions,
    handleCreate,
    handleCancelCreate,
    handleConfirmCreate,
    handleSubstitutionChange,
    handleUpdateNewFile,
    handleNextTab,
    hasNextTab,
    collections,
  };
};

const incrementCounters = (substitutions: Substitution[], db: Database) => {
  substitutions
    .filter(
      (substitution) =>
        substitution.variable &&
        substitution.variable.type == VariableType.Counter
    )
    .map((substitution) => substitution.variable)
    .forEach((counter) => {
      counter && db.incrementCount(counter.id as string);
    });
};

export const [
  TemplatePageCreateDialogStateProvider,
  useTemplatePageCreateDialogState,
] = constate(templatePageCreateDialogState);
