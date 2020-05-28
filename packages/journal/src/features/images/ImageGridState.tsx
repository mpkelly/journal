import { useState, useCallback, useEffect } from "react";
import { isHotkey } from "@mpkelly/react-editor-kit";
import { Media } from "../media/Media";
import { ImageGridProps } from "./ImageGrid";

export const useImageGridState = (props: ImageGridProps) => {
  const { images } = props;
  const [showing, setShowing] = useState<Media>();
  const [selected, setSelected] = useState<Media>(images[0]);

  const next = useCallback(() => {
    let index = images.indexOf(selected);
    if (index + 1 >= images.length) {
      index = 0;
    } else {
      index++;
    }
    const active = images[index];
    setSelected(active);
    if (showing) {
      setShowing(active);
    }
  }, [images, showing, selected]);

  const previous = useCallback(() => {
    let index = images.indexOf(selected);
    if (index - 1 < 0) {
      index = images.length - 1;
    } else {
      index--;
    }
    const active = images[index];
    setSelected(active);
    if (showing) {
      setShowing(active);
    }
  }, [images, showing, selected]);

  useEffect(() => {
    if (!selected) {
      setSelected(images[0]);
    }
  }, [selected, images]);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      const inputFocused = Boolean(
        document.querySelector(`input:focus, textarea:focus`)
      );
      if (inputFocused) {
        return;
      }
      if (isHotkey("space")(event)) {
        event.preventDefault();
        setShowing(selected);
      }
      if (isHotkey("ArrowRight")(event)) {
        next();
      }
      if (isHotkey("ArrowLeft")(event)) {
        previous();
      }

      if (isHotkey("escape")(event)) {
        setShowing(undefined);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [showing, selected, next]);

  return { selected, setSelected, showing, setShowing, images };
};
