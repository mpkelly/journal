import { useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import constate from "constate";
import { Element, Node } from "@mpkelly/react-editor-kit";
import { useDatabase } from "../database/DatabaseState";
import { File, FileType } from "../file/File";
import { newId } from "../../util/Identity";
import { findPlaceholders } from "../placeholders/Placeholder";
import { FlatNode } from "@mpkelly/react-tree";

export type Substitution = { name: string; value: string };

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

  const handleCreate = (template: File) => {
    const id = newId();
    const file = { ...template, template: false, id };
    setSubstitutions(findSubstitutions((file.data as Element[]) || []));
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
      db.addFile(newFile).then(() => {
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

const findSubstitutions = (elements: Element[]) => {
  const result: Substitution[] = [];
  elements.forEach((element) => {
    const text = Node.string(element);
    findPlaceholders(text).forEach((name) => {
      if (!result.find((substitution) => substitution.name === name)) {
        result.push({ name, value: "" });
      }
    });
  });
  return result;
};

const applySubstitutions = (nodes: Node[], substitution: Substitution[]) => {
  nodes.forEach((node) => {
    if (node.text) {
      substitution.forEach((substitution) => {
        node.text = node.text
          .split(`{${substitution.name}}`)
          .join(substitution.value || `{${substitution.name}}`);
      });
    }
    if (node.children) {
      applySubstitutions(node.children, substitution);
    }
  });
};

export const [
  TemplatePageCreateDialogStateProvider,
  useTemplatePageCreateDialogState,
] = constate(templatePageCreateDialogState);
