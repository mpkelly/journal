import { useState, useEffect, useCallback } from "react";
import { useDatabase } from "../database/DatabaseState";
import { File } from "../file/File";
import { newId } from "../../util/Identity";
import { useHistory } from "react-router-dom";
import { Element, Node } from "@mpkelly/react-editor-kit";
import { findPlaceholders } from "../placeholders/Placeholder";

export type Substitution = { name: string; value: string };

export const useTemplatePageState = () => {
  const db = useDatabase();
  const [templates, setTemplates] = useState<File[]>([]);
  const [newFile, setNewFile] = useState<File>();
  const [substitutions, setSubstitutions] = useState<Substitution[]>([]);
  const history = useHistory();

  useEffect(() => {
    db.getTemplates().then(setTemplates);
  }, []);

  const handleCreate = (template: File) => {
    const id = newId();
    const file = { ...template, template: false, id };
    setSubstitutions(findSubstitutions((file.data as Element[]) || []));
    setNewFile(file);
  };

  const handleCancelCreate = () => {
    setNewFile(undefined);
  };

  const handleConfirmCreate = useCallback(
    (substitutions: Substitution[]) => {
      if (newFile) {
        applySubstitutions((newFile.data as Node[]) || [], substitutions);
        db.addFile(newFile).then(() => {
          history.push(`/library/view/${newFile.id}`);
        });
      }
    },
    [newFile]
  );

  return {
    templates,
    newFile,
    substitutions,
    handleCreate,
    handleCancelCreate,
    handleConfirmCreate,
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
          .join(substitution.value);
      });
    }
    if (node.children) {
      applySubstitutions(node.children, substitution);
    }
  });
};
