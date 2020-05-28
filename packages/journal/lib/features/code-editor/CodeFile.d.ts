export interface CodeFile {
    id?: any;
    type: CodeType;
    name: string;
    data: any;
    global?: boolean;
}
export declare enum CodeType {
    Css = 0,
    JavaScript = 1
}
export declare const createCodeFile: (type: CodeType, name: string, global?: boolean) => CodeFile;
export declare const DefaultCSS = "/**\n\nStyles you add below get applied to the #editor element. You can override print styles by wrapping your styles in @media print {...}\n\nNeed to load a font? You can do so like:\n\n@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');\n\n* {\n  font-family:'Open Sans', sans-serif;\n}\n\nWant to centre the editor or restict the width? Try adding:\n\nmax-width: 800px;\nmargin: 0 auto;\n\n**/";
export declare const DefaultJS = "/**\n\nExecute a script against the current editor data model which is passed as context.nodes. \n\n**/\n\n(context) => {\n \n  let nodes = context.nodes;\n\n  console.log(nodes);\n}\n\n";
