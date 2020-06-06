import { createCodeFile, CodeType } from "./CodeFile";

export const DefaultCss = `

/**
 * 
 * This file hides non-editor content for printing. You should add your own style file
 * rather than edit this one (unless you know what you're doing).
 *
 * **/

@media print {
  body * {
    visibility: hidden;
    overflow: visible !important;
    -webkit-print-color-adjust: exact !important;
    pointer-events: none !important;
  }

  main {
    top: 0;
    left: 0;
    position: absolute;
    width: 100vw;
    height: auto;
  }

  main > div > div:first-child {
    display: none !important;
  }

  #editor * {
    visibility: visible;
    overflow: visible !important;
    color: #000 !important;
  }

  #editor {
    width: 100vw;
    height: auto;
    position: absolute;
    left: 0;
    top: 0;
  }

  #editor:first-child {
    width: 100vw;
    height: auto;
    margin: 0;
    padding-top: 0;
    padding-bottom: 0;
    background-color: white !important;
  }

  @page {
    size: auto;
    margin: 0.5cm;
  }
}

`;

export const DefaultScript = `
/**

Execute a script against the current editor data model which is passed as context.nodes. 

**/

(context) => {
 
  let nodes = context.nodes;

  console.log(nodes);
}
`;

export const DefaultCssFile = createCodeFile(
  CodeType.Css,
  "Print.css",
  true,
  DefaultCss
);
export const DefaultScriptFile = createCodeFile(
  CodeType.JavaScript,
  "Script.js",
  true,
  DefaultScript
);
