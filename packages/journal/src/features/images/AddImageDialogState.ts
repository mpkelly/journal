import { AddImageDialogProps } from "./AddImageDialog";
import { usePagerState } from "../../components/pager/PagerState";
import { Media } from "../media/Media";
import { getImageSource } from "./ImageTile";

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
  } = usePagerState<Media>({
    items: images,
    count: images.length,
    page: 0,
    pageSize: 1,
  });

  const image = items.items[page];
  const source = getImageSource(image);

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
  };
};
