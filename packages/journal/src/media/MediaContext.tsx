import React, { useContext, createContext, useState, useEffect } from "react";
import { Media, useMediaDatabase, MediaType } from "./MediaDatabase";
import { MenuItem } from "udx-react";
import { MediaPageProps } from "./MediaPage";
import { ImagesIcon, VideosIcon, TextIcon } from "../icons/IconNames";
import { useTags } from "../tags/TagContext";
import { FileUpload } from "../upload/Upload";
import { fileToBase64 } from "../util/Files";

export interface MediaContextValue {
  items: Media[][];
  sortItems: MenuItem[];
  sortItem: MenuItem;
  tabIndex: number;
  mediaIcon: string;
  type: MediaType;
  handleTabChange(index: number): void;
  handleDelete(media: Media): void;
  handleUpdate(media: Media): void;
  handleUpload(upload: FileUpload): void;
  refresh(): void;
}
const Context = createContext<MediaContextValue>({} as MediaContextValue);

export const useMedia = () => {
  return useContext(Context);
};

export interface MediaProviderProps extends MediaPageProps {
  children: any;
}

export const MediaProvider = (props: MediaProviderProps) => {
  const db = useMediaDatabase();
  const { selected } = useTags();
  const { pathname } = props.location;
  const [type, setType] = useState<MediaType>(Tabs[0].type);
  const [media, setMedia] = useState<Media[]>([]);
  const [options, setOptions] = useState(initialOptions());

  useEffect(() => {
    const initial = Tabs.find(tab => pathname.endsWith(tab.labelKey));
    if (initial) {
      setType(initial.type);
    }
  }, [pathname]);

  useEffect(() => {
    loadMedia();
  }, [type, selected]);

  const loadMedia = () => {
    const tags = selected.length ? selected : undefined;
    db.loadMedia(type, tags).then(setMedia);
  };

  const sortItems: MenuItem[] = sortChoices.map((choice, index) => {
    choice.onClick = () => setOptions(options => ({ ...options, sort: index }));
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
      upload.images.map(async image => {
        const content = await fileToBase64(image);
        db.add({
          type: MediaType.Image,
          name: image.name,
          content,
          source: "uploaded",
          pageSource: "",
          tags: []
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
  const tabIndex = Tabs.findIndex(tab => tab.type == type);
  const items = groupitems(mediaItems, Tabs[tabIndex].columns);
  const mediaIcon = Tabs[tabIndex].icon;

  const context = {
    items,
    sortItems,
    sortItem,
    tabIndex,
    mediaIcon,
    handleTabChange,
    handleDelete,
    handleUpdate,
    refresh: loadMedia,
    type,
    handleUpload
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

const sortChoices: MenuItem[] = [{ name: "Date Asc." }, { name: "Date Desc." }];

export const Tabs = [
  { labelKey: "images", icon: ImagesIcon, type: MediaType.Image, columns: 3 },
  { labelKey: "videos", icon: VideosIcon, type: MediaType.Video, columns: 2 },
  { labelKey: "text", icon: TextIcon, type: MediaType.Text, columns: 2 }
];
