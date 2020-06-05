import { useState, useEffect, useCallback } from "react";
import { FileUpload } from "../upload/Upload";
import { fileToBase64 } from "../../util/Files";
import { getImageSize } from "./ImageSize";
import { usePagerState } from "../../components/pager/PagerState";
import { useMediaDatabase } from "../media/MediaDatabase";
import { Media, MediaType } from "../media/Media";
import useBoolean from "react-hanger/useBoolean";
import { emptyPagedResult } from "../database/Database";

const pageSize = 24;

export const useImageState = () => {
  const db = useMediaDatabase();
  const [newImages, setNewImages] = useState<Media[]>([]);
  const [search, setSearch] = useState("");
  const sort = useBoolean(false);

  const {
    items,
    setItems,
    page,
    hasNext,
    hasPrevious,
    handleNext,
    handlePrevious,
    totalPages,
  } = usePagerState<Media>();

  useEffect(() => {
    loadImages();
  }, [MediaType.Image, search, page, sort.value]);

  const loadImages = () => {
    db.loadMedia(MediaType.Image, search, page, pageSize, sort.value).then(
      setItems
    );
  };

  const handleSort = () => {
    setItems(emptyPagedResult());
    sort.toggle();
  };

  const handleDelete = async (media: Media) => {
    await db.delete(media.id as number);
    loadImages();
  };

  const handleChange = useCallback(
    async (media: Media) => {
      const next = items.items.slice();
      next.splice(next.indexOf(media), 1, media);
      setItems((page) => ({ ...page, items: next }));
      db.update(media);
    },
    [items]
  );

  const handleUpload = async (upload: FileUpload) => {
    const now = new Date().toLocaleString();
    const media = await Promise.all(
      upload.images.map(async (image) => {
        const content = await fileToBase64(image);
        const size = await getImageSize(image);
        return {
          type: MediaType.Image,
          name: image.name || "unnamed image",
          content,
          source: "uploaded",
          pageSource: "",
          tags: [],
          extension: image.type,
          created: now,
          modified: now,
          ...size,
        };
      })
    );
    setNewImages(media);
  };

  const handleFiles = (files: File[]) => {
    handleUpload({ images: files, text: [], docs: [] });
  };

  const handleAddMedia = async (media: Media[]) => {
    await Promise.all(
      media.map(async (media) => {
        return db.add(media);
      })
    );
    setNewImages([]);
    loadImages();
  };

  return {
    images: items.items,
    hasNext,
    hasPrevious,
    handleNext,
    handlePrevious,
    handleDelete,
    handleChange,
    count: items.count,
    page: items.page + 1,
    searchCount: items.search ? items.count : "",
    totalPages,
    handleSort,
    handleRefresh: loadImages,
    handleUpload,
    newImages,
    handleAddMedia,
    handleSearch: setSearch,
    handleFiles,
  };
};
