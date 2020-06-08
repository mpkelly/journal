import { Element, Node } from "@mpkelly/react-editor-kit";
import { findPlaceholders } from "../placeholders/Placeholder";
import { findVariables, Variable } from "../variables/Variable";

export type Substitution = {
  name: string;
  value: string;
  type: SubstitutionType;
  variable?: Variable;
};

export enum SubstitutionType {
  Placeholder,
  Variable,
}

export const findSubstitutions = (
  elements: Element[],
  variables: Variable[]
) => {
  const result: Substitution[] = [];
  elements.forEach((element) => {
    const text = Node.string(element);
    findPlaceholders(text).forEach((substitution) => {
      if (!result.find((substitution) => substitution.name === name)) {
        result.push(substitution);
      }
    });
    findVariables(text, variables).forEach((substitution) => {
      if (!result.find((substitution) => substitution.name === name)) {
        result.push(substitution);
      }
    });
  });
  return result;
};

export const applySubstitutions = (
  nodes: Node[],
  substitution: Substitution[]
) => {
  nodes.forEach((node) => {
    if (node.text) {
      substitution
        .sort((a, b) => a.type - b.type)
        .forEach((substitution) => {
          node.text = node.text
            .split(substitution.name)
            .join(substitution.value || substitution.name);
        });
    }
    if (node.children) {
      applySubstitutions(node.children, substitution);
    }
  });
};
