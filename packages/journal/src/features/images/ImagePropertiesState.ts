import useInput from "react-hanger/useInput";
import { isHotkey } from "@mpkelly/react-editor-kit";
import { Media } from "../media/Media";
import { ImagePropertiesProps } from "./ImageProperties";
import { useCallback } from "react";

export const useImagePropertiesState = (props: ImagePropertiesProps) => {
  const { image, onChange } = props;
  const handleChange = (changes: Partial<Media>) => {
    onChange({ ...image, ...changes });
  };
  const tag = useInput();

  const handleKey = (event: React.KeyboardEvent) => {
    if (isHotkey("enter", event.nativeEvent)) {
      handleTagsChange();
    }
  };

  const handleTagsChange = useCallback(() => {
    const tags = image.tags || [];
    const newTags = tag.value
      .split(",")
      .map((part) => part.trim())
      .filter((tag) => !tags.includes(tag) && tag && tag !== ",");
    if (newTags.length) {
      handleChange({ ...image, tags: newTags.concat(tags) });
      tag.clear();
    }
  }, [image, tag.value]);

  const handleDeleteTag = useCallback(
    (tag: string) => {
      image.tags.splice(image.tags.indexOf(tag, 1));
      handleChange({ ...image });
    },
    [image]
  );

  return {
    image,
    handleChange,
    handleTagsChange,
    handleDeleteTag,
    handleKey,
    tag,
  };
};
