import { Plugin } from "@mpkelly/react-editor-kit";

export const WikiEditorStylePlugin: Plugin = {
  name: "wiki-editor-style",
  globalStyle: `  

  .paper-header {
    position:absolute;
    display:flex;
    top:0;
    left:0;
    right:0;
    justify-content:space-between;

    .rek-icon-button {
      background-color:transparent !important;
      color:var(--primary-text-color);
      border-radius:50%;
      &:hover {
        background-color:var(--gray-light2-color) !important;
      }
    }    

    .left {
      display:flex;
      padding:12px;
      
    }

    .right {
      margin-left:auto;
      display:flex;
      justify-content:flex-end;
      padding:12px;  
    }
  }

  .rek-editor-toolbar {
    background-color: var(--content-background);
    color:var(--primary-text-color);
    display:flex;
    align-items:center;
    border-radius:3px;
    position:absolute;
    left: 50%;
    bottom:16px;
    transform: translateX(-50%);

  }

  .rek-editor-toolbar-overflow {
    display:none;
  }

  .rek-selection-toolbar {
    background-color:var(--content-background);
    padding: 2px 6px;
    span {
      color: var(--primary-text-color);
    }
  }


  .rek-suggestion-list {
    background-color:var(--content-background) !important;
  }

  .rek-svg-icon path {
    fill: var(--primary-text-color);
  }

  .rek-check-container .rek-checkmark:after{
    border-color: rgba(0,0,0,.9);
  }

  a:visited {
    color: var(--action-color);
  }

  `,
  editorStyle: `
    width:100%;
    margin: 0 auto;
    height: 100%;
    padding: 32px;
    overflow-y: auto;
    overflow-x:hidden;
    margin-bottom: 32px;

    .rek-header-row .rek-tr:first-child  {
      background-color: var(--gray-light2-color) !important;
    }

    .rek-header-column .rek-td:first-child  {
      background-color: var(--gray-light2-color) !important;
    }
    
    height: calc(100vh - 80px);
    h1 {
      font-weight: 400;
      font-size: 48px;
    }

    .rek-todo-item-content.rek-empty:before {
      opacity:0.4;
    }
    
  `,
};
