import { System } from "@mpkelly/siam";
import { Plugin } from "@mpkelly/react-editor-kit";

const getStyle = (system: System) => {
  const { colors } = system;
  const primary = colors["primary.text"];
  const secondary = colors["secondary.text"];
  const light = colors["light.text"];
  const { accent, content, background } = colors;
  return `
    :root {
      
      --editor-primary: ${accent};
      --editor-dark: ${primary};
      
      --editor-muted: ${secondary};
      --editor-light: ${light};
  
      --tooltip-background-color: var(--editor-dark);
      --tooltip-text-color: ${background};      
      --content-background: ${content} !important;
      --primary-text-color: var(--editor-dark) !important;
      --secondary-text-color: var(--editor-muted);      
      --gray-light-color:rgba(255,255,255,0.2);
      --gray-light2-color:rgba(255,255,255,0.1);
      --divider-color: var(--gray-light-color);
      --control-hover-color: var(--gray-light-color);!important;
      --input-background-color: var(---gray-light2-color);
      --action-color: var(--editor-primary);
      --button-color: var(--editor-light);
      --danger-color: red;
      --focus-color: var(--editor-primary);
      --selection-color: #E3E3E3;
      --editor-ui-font: 'Noto Sans TC', sans-serif;
    }
  
  
    .rek-selection-toolbar {
      background-color:var(--editor-dark);
    }
  
    .rek-icon-button {
      color:var(--editor-dark);
      border-radius:3px;
    }
  

    .rek-editor-toolbar-wrapper {
      border-top: none;
      width:100%;
      color: var(--editor-light);

      .rek-icon-button {  
        font-size:24px;
        color: var(--editor-light);
      }

      .rek-icon-button:hover,
      .rek-icon-button.active {
        background-color: ${accent};
        color: ${light};
      }
    }
  
    .rek-input,
    .rek-list-item {
      font-size:16px;
    }  
`;
};

export const createEditorStylePlugin = (system: System): Plugin => {
  return {
    name: "editor-style",
    globalStyle: getStyle(system),
    order: 10000,
  };
};
