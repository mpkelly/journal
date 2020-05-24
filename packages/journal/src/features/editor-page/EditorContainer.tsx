import { styled, Article } from "@mpkelly/siam";

//TODO this should be part of the default style-sheet;
export const EditorContainer = styled(Article)`
  h1 {
    font-size: 36px;
    line-height: 1.5;
  }

  h2 {
    font-size: 32px;
    line-height: 1.4;
  }

  h3 {
    font-size: 28px;
    line-height: 1.3;
  }

  h4 {
    font-size: 24px;
    line-height: 1.2;
  }

  h5 {
    font-size: 20px;
  }

  h6 {
    font-size: 18px;
  }

  font-size: 16px;

  div,
  ol,
  p {
    font-size: 14px;
  }

  [data-slate-node="text"] {
    line-height: 1.6;
  }

  li {
    font-size: inherit;
    font-weight: inherit;
    font-style: inherit;
    text-decoration: inherit;
  }
  blockquote {
    font-size: larger;
    font-style: italic;
    padding-left: 16px;
  }

  code > pre {
    font-size: smaller;
    padding: 16px;
  }

  .rek-header-row .rek-tr:first-child {
    background-color: var(--gray-light2-color) !important;
  }

  .rek-header-column .rek-td:first-child {
    background-color: var(--gray-light2-color) !important;
  }
`;
