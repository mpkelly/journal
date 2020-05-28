import { newId } from "../../util/Identity";
import { Node } from "@mpkelly/react-editor-kit";

export interface CodeFile {
  id?: any;
  type: CodeType;
  name: string;
  data: any;
  //Called "default" in the UI
  global?: boolean;
}

export enum CodeType {
  Css,
  JavaScript,
}

export const createCodeFile = (
  type: CodeType,
  name: string,
  global = false
): CodeFile => {
  const id = newId();
  let data: Node[] = [];

  if (type === CodeType.Css) {
    data = [
      {
        type: "code",
        lang: "CSS",
        children: [
          {
            text: DefaultCSS,
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
            text: DefaultJS,
          },
        ],
      },
    ];
  }

  return { id, name, type, data, global };
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
 
  let nodes = context.nodes;

  console.log(nodes);
}

`;
