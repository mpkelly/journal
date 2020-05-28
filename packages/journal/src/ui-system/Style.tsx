import { createGlobalStyle } from "@mpkelly/siam";

export const Style: any = createGlobalStyle`
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
  width: 4px;
  height: 4px;
}

::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0);
}

::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 3px;
}
`;
