import { SubstitutionType, Substitution } from "../substitution/Substitution";

const PlaceholderPattern = /(?:^|[^{])\{([^{}]*)(?=\}(?!\}))/g;

export const findPlaceholders = (text: string): Substitution[] => {
  var match = PlaceholderPattern.exec(text);
  const placeholders = new Map<string, any>();
  while (match != null) {
    placeholders.set(`{${match[1]}}`, null);
    match = PlaceholderPattern.exec(text);
  }
  return Array.from(placeholders.keys()).map((name) => ({
    name,
    value: "",
    type: SubstitutionType.Placeholder,
  }));
};
