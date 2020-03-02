import { Plugin } from "@mpkelly/react-editor-kit";
import { StyleSystem } from "../style/StyleSystem";

export const EditorStylePlugin: Plugin = {
  editorStyles: () => EditorStyle,
  globalStyles: () => GlobalStyle
};

const EditorStyle = `
  h1 {
    font-size:36px;
  }

  h2 {
    font-size:32px;
  }

  h3 {
    font-size:28px;
  }

  h4 {
    font-size:24px;
  }

  h5 {
    font-size:20px;
  }

  h6 {
    font-size:18px;
  }
    
  font-size:18px;

  div,
  ol,
  p {
    font-size:18px;
  } 
  
  li {
    font-size:inherit;
    font-weight:inherit;
    font-style:inherit;
    text-decoration:inherit;  
  }
`;

const GlobalStyle = `

  :root {
    --editor-primary: ${StyleSystem.colors.primary};
    --editor-dark: ${StyleSystem.colors.primaryText};
    --editor-muted: ${StyleSystem.colors.secondaryText};
    --editor-light: ${StyleSystem.colors.lightText};
  
    --tooltip-background-color: var(--editor-dark);
    --tooltip-text-color: var(--editor-light);
    --control-hover-color: rgba(0,0,0,0.1);
    --content-background: white;
    --primary-text-color: var(--editor-dark);
    --secondary-text-color: var(--editor-muted);
    --divider-color: rgba(0,0,0,0.2);
    --input-background-color: rgba(0,0,0,0.1);
    --action-color: var(--editor-primary);
    --button-color: var(--editor-light);
    --danger-color: red;
    --focus-color: var(--editor-primary);
    --selection-color: #E3E3E3;
    --editor-ui-font: sans-serif;
  }

  .rek-selection-toolbar {
    background-color:var(--editor-dark);
  }

  .rek-icon-button {
    color:var(--editor-dark);
    border-radius:3px;
  }

  .rek-editor-toolbar {
    padding:0;
  }
  .rek-editor-toolbar-wrapper {
    border-top: none;
    width:100%;    

    .rek-icon-button.active {
      background-color: var(--editor-dark);
      color: var(--editor-light);
    }
  }  

  .rek-input,
  .rek-list-item {
    font-size:16px;
  }

`;
