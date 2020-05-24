import { useEffect } from "react";

export const useEventListener = (
  //TODO check why there is a type error when using CustomEvent
  handler: (event: any) => void,
  ...names: string[]
) => {
  useEffect(() => {
    names.forEach((name) => window.addEventListener(name, handler));
    return () =>
      names.forEach((name) => window.removeEventListener(name, handler));
  }, [handler, names]);
};

export const fireEvent = (name: string, detail: any = {}) => {
  document.dispatchEvent(new CustomEvent(name, { bubbles: true, detail }));
};
