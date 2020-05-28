import { AddImageDialogProps } from "./AddImageDialog";
import { usePagerState } from "../../components/pager/PagerState";
import { Media } from "../media/Media";
import { getImageSource } from "./ImageTile";
import { useCallback } from "react";

export const useAddImageDialogState = (props: AddImageDialogProps) => {
  const { images, onConfirm } = props;

  const {
    items,
    page,
    hasNext,
    hasPrevious,
    handleNext,
    handlePrevious,
    totalPages,
    setItems,
  } = usePagerState<Media>({
    items: images,
    count: images.length,
    page: 0,
    pageSize: 1,
  });

  const image = items.items[page];
  const source = getImageSource(image);

  const handleChange = useCallback(
    (image: Media) => {
      items.items[page] = image;
      setItems({ ...items });
    },
    [items, page]
  );

  return {
    image,
    images: items.items,
    source,
    onConfirm,
    page: page + 1,
    hasNext,
    hasPrevious,
    handleNext,
    handlePrevious,
    totalPages,
    handleChange,
  };
};
