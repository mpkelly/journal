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

.rek-resizable {
  overflow:hidden;
}


`;
