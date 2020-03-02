import { createGlobalStyle } from "styled-components";

export const Style = createGlobalStyle`
html,
body,
#app {
  padding: 0;
  margin: 0;
  height: 100vh;
  width: 100vw;
}

* {
  box-sizing: border-box;
}

::-webkit-scrollbar {
  width: 0px;
  height: 0px;
}

::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0);
}

::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 3px;
}

@media print {
  body * {
    visibility: hidden;
  }

  [data-slate-editor=true],
  [data-slate-editor=true] *,
  .printable,
  .printable * {
    visibility: visible;
    width: auto;
    height: auto;
    overflow: visible !important;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;      
    color: #000 !important;
  }

  [data-slate-editor=true],
  .printable {
    position: absolute;
    left: 0;
    top: 0;
  }

  @page {
    size: auto;
    margin: .5cm;

  }

}
`;
