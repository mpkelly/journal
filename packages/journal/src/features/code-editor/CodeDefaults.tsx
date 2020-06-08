import { createCodeFile, CodeType } from "./CodeFile";

export const DefaultPrintCss = `

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

export const A4PageCss = `

/* mostly required for table */
:root {
	--gray-light-color:rgba(0,0,0,.2);
  --gray-light2-color:rgba(0,0,0,.1);
  --divider-color: var(--gray-light-color);
}

#documenteditor {
	width: 210mm;
	background:white;
	margin:16px;
	color: rgba(0,0,0,.9);
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

export const LoadExternalLibScript = `

/**

Example of loading an external library. Only https://unpkg.com is allowed for now in a Chrome extension. 

**/

(context) => {

  const generateAPdf = () => {
		const doc = new jsPDF()
		doc.text('Hello world!', 10, 10)
		doc.save('a4.pdf')
	} 

 // Load an array of dependencies. Once completed the callback gets called
	context
		.loadJs(["https://unpkg.com/jspdf@latest/dist/jspdf.min.js"], generateAPdf);

}

`;

export const DefaultCssPrintFile = createCodeFile(
  CodeType.Css,
  "Print.css",
  true,
  DefaultPrintCss
);

export const DefaultScriptFile = createCodeFile(
  CodeType.JavaScript,
  "Script.js",
  true,
  DefaultScript
);

export const A4PageCssFile = createCodeFile(
  CodeType.Css,
  "A4Page.css",
  false,
  A4PageCss
);

export const LoadExternalScriptFile = createCodeFile(
  CodeType.JavaScript,
  "Load Script.js",
  true,
  LoadExternalLibScript
);

export const DefaultCodeFiles = [
  DefaultCssPrintFile,
  DefaultScriptFile,
  A4PageCssFile,
  LoadExternalScriptFile,
];
