import React, { useContext, createContext, useState, useEffect } from "react";
import { Media, useMediaDatabase, MediaType } from "./MediaDatabase";
import { MenuItem } from "@mpkelly/siam";
import { MediaPageProps } from "./MediaPage";
import { useTags } from "../tags/TagContext";
import { FileUpload } from "../upload/Upload";
import { fileToBase64 } from "../util/Files";
import { useCallback } from "react";

export interface MediaContextValue {
  groups: Media[][];
  media: Media[];
  sortItems: any[];
  sortItem: any;
  tabIndex: number;
  mediaIcon: string;
  type: MediaType;
  handleTabChange(index: number): void;
  handleDelete(media: Media): void;
  handleUpdate(media: Media): void;
  handleUpload(upload: FileUpload): void;
  refresh(): void;
  handlePreviousPage(): void;
  handleNextPage(): void;
  hasPrevious: boolean;
  hasNext: boolean;
  totalPages: number;
  total: number;
  currentPage: number;
}
const Context = createContext<MediaContextValue>({} as MediaContextValue);

export const useMedia = () => {
  return useContext(Context);
};

export interface MediaProviderProps extends MediaPageProps {
  children: any;
}

const pageSize = 24;

export const MediaProvider = (props: MediaProviderProps) => {
  const db = useMediaDatabase();
  const { selected } = useTags();
  const { pathname } = props.location;
  const [type, setType] = useState<MediaType>(Tabs[0].type);
  const [media, setMedia] = useState<Media[]>([]);
  const [options, setOptions] = useState(initialOptions());
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const initial = Tabs.find((tab) => pathname.endsWith(tab.labelKey));
    if (initial) {
      setType(initial.type);
    }
  }, [pathname]);

  useEffect(() => {
    loadMedia();
  }, [type, selected, page]);

  const loadMedia = () => {
    const tags = selected.length ? selected : [];
    db.loadMedia(type, tags, page, pageSize).then((result) => {
      setMedia(result.items);
      setTotal(result.total);
    });
  };
  const totalPages = Math.ceil(total / pageSize);

  const handlePreviousPage = () => {
    setPage((page) => page - 1);
  };

  const handleNextPage = () => {
    setPage((page) => page + 1);
  };

  const hasPrevious = page > 0;

  const hasNext = page < totalPages - 1;

  const sortItems: any[] = sortChoices.map((choice, index) => {
    choice.onClick = () =>
      setOptions((options) => ({ ...options, sort: index }));
    return choice;
  });

  const handleTabChange = (index: number) => {
    setType(Tabs[index].type);
  };

  const handleDelete = async (media: Media) => {
    await db.delete(media.id as number);
    loadMedia();
  };

  const handleUpdate = async (media: Media) => {
    await db.update(media);
    loadMedia();
  };

  const handleUpload = async (upload: FileUpload) => {
    await Promise.all(
      upload.images.map(async (image) => {
        const content = await fileToBase64(image);
        db.add({
          type: MediaType.Image,
          name: image.name,
          content,
          source: "uploaded",
          pageSource: "",
          tags: [],
        });
        return true;
      })
    );
    loadMedia();
  };

  const sortItem = sortItems[options.sort];
  const mediaItems = media.slice();

  if (options.sort == 1) {
    mediaItems.reverse();
  }
  const tabIndex = Tabs.findIndex((tab) => tab.type == type);
  const groups = groupitems(mediaItems, Tabs[tabIndex].columns);
  const mediaIcon = Tabs[tabIndex].icon;

  const context = {
    groups,
    media,
    sortItems,
    sortItem,
    tabIndex,
    mediaIcon,
    handleTabChange,
    handleDelete,
    handleUpdate,
    refresh: loadMedia,
    type,
    handleUpload,
    handlePreviousPage,
    handleNextPage,
    hasPrevious,
    hasNext,
    totalPages,
    total,
    currentPage: page + 1,
  };

  return <Context.Provider value={context}>{props.children}</Context.Provider>;
};

const initialOptions = () => ({ sort: 0 });

const groupitems = (items: Media[], count: number) => {
  const groups: Media[][] = Array.from({ length: count }).map(() => []);
  let index = 0;
  items.forEach((item: any) => {
    groups[index++].push(item);
    if (index === groups.length) {
      index = 0;
    }
  });
  return groups;
};

const sortChoices: any[] = [{ name: "Date Asc." }, { name: "Date Desc." }];

export const Tabs = [
  { labelKey: "images", icon: "images", type: MediaType.Image, columns: 3 },
  { labelKey: "videos", icon: "videos", type: MediaType.Video, columns: 2 },
  { labelKey: "text", icon: "text", type: MediaType.Text, columns: 2 },
];
