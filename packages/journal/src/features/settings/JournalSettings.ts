export interface JournalSettings {
  id: 1;
  siteName: string;
  wikiPageWidth: number | string;
  showImageProperties: boolean;
}

export const DefaultSettings: JournalSettings = {
  id: 1,
  siteName: "Journal",
  wikiPageWidth: 800,
  showImageProperties: false,
};
