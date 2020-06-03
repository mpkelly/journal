export interface CodeFile {
    id?: any;
    type: CodeType;
    name: string;
    data: any;
    global?: boolean;
    modified: string;
    created: string;
}
export declare enum CodeType {
    Css = 0,
    JavaScript = 1
}
export declare const createCodeFile: (type: CodeType, name: string, global?: boolean) => CodeFile;
export declare const DefaultCSS = "\n/**\n Global styles can be registered here. Just be careful not to break the Jounral UI! You can load fonts here like so:\n\n @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');\n\n then below you could add:\n\n #documenteditor {\n    * {\n      font-family: 'Open Sans', sans-serif;\n    }\n }\n\n Note: these styles are only applied when you have the linked document open.  \n**/\n\n#documenteditor {\n  /** add your editor styles here **/\n\n  @media print {\n    /** add your print styles here **/\n  }\n}\n\n";
export declare const DefaultJS = "/**\n\nExecute a script against the current editor data model which is passed as context.nodes. \n\n**/\n\n(context) => {\n \n  let nodes = context.nodes;\n\n  console.log(nodes);\n}\n\n";
