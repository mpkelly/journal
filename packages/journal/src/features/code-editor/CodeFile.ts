import { newId } from "../../util/Identity";
import { Node } from "@mpkelly/react-editor-kit";

export interface CodeFile {
  id?: any;
  type: CodeType;
  name: string;
  data: any;
}

export enum CodeType {
  Css,
  JavaScript,
}

export const createCodeFile = (type: CodeType, name: string): CodeFile => {
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

  return { id, name, type, data };
};

export const DefaultCSS = `/**

Styles you add below get applied to the #editor element. You can override print styles by wrapping your styles in @media print {...}

Need to load a font? You can do so like:

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');

* {
  font-family:'Open Sans', sans-serif;
}

Want to centre the editor or restict the width? Try adding:

max-width: 800px;
margin: 0 auto;

**/`;

export const DefaultJS = `/**

Execute a script against the current editor data model which is passed as context.nodes. 

**/

(context) => {
 
  let nodes = context.nodes;

  console.log(nodes);
}

`;
