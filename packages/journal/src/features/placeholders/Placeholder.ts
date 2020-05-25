//Kudos https://stackoverflow.com/questions/12728128/regular-expression-to-match-single-bracket-pairs-but-not-double-bracket-pairs
const PlaceholderPattern = /(?:^|[^{])\{([^{}]*)(?=\}(?!\}))/g;

export const findPlaceholders = (text: string): string[] => {
  var match = PlaceholderPattern.exec(text);
  const placeholders = new Map<string, any>();
  while (match != null) {
    placeholders.set(match[1], null);
    match = PlaceholderPattern.exec(text);
  }
  console.log(placeholders);
  return Array.from(placeholders.keys());
};
