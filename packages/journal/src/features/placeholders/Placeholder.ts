//Kudos https://stackoverflow.com/questions/12728128/regular-expression-to-match-single-bracket-pairs-but-not-double-bracket-pairs
const PlaceholderPattern = /(?:^|[^{])\{([^{}]*)(?=\}(?!\}))/g;

export const findPlaceholders = (text: string) => {
  var match = PlaceholderPattern.exec(text);
  const placeholders: string[] = [];
  while (match != null) {
    placeholders.push(match[1]);
    match = PlaceholderPattern.exec(text);
  }
  return placeholders;
};
