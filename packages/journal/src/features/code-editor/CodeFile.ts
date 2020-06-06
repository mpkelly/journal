import { newId } from "../../util/Identity";
import { Node } from "@mpkelly/react-editor-kit";
import { fileDate } from "../file/File";

export interface CodeFile {
  id?: any;
  type: CodeType;
  name: string;
  data: any;
  //Called "default" in the UI
  global?: boolean;
  modified: string;
  created: string;
}

export enum CodeType {
  Css,
  JavaScript,
}

export const createCodeFile = (
  type: CodeType,
  name: string,
  global = false,
  content = ""
): CodeFile => {
  const id = newId();
  let data: Node[] = [];
  const now = fileDate();
  const created = now;
  const modified = now;

  if (type === CodeType.Css) {
    data = [
      {
        type: "code",
        lang: "CSS",
        children: [
          {
            text: content || DefaultCSS,
          },
        ],
      },
    ];
  } else {
    data = [
      {
        type: "code",
        lang: "JavaScript",
        children: [
          {
            text: content || DefaultJS,
          },
        ],
      },
    ];
  }

  return { id, name, type, data, global, created, modified };
};

export const DefaultCSS = `
/**
 Global styles can be registered here. Just be careful not to break the Jounral UI! You can load fonts here like so:

 @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');

 then below you could add:

 #documenteditor {
    * {
      font-family: 'Open Sans', sans-serif;
    }
 }

 Note: these styles are only applied when you have the linked document open.  
**/

#documenteditor {
  /** add your editor styles here **/

  @media print {
    /** add your print styles here **/
  }
}

`;

export const DefaultJS = `/**

Execute a script against the current editor data model which is passed as context.nodes. 

**/

(context) => {
 
  // nodes in JS Object Array based on Slate's data format
  let nodes = context.nodes;

  console.log(nodes);
}

`;
