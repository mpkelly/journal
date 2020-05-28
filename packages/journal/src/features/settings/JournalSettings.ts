export interface JournalSettings {
  id: 1;
  siteName: string;
  wikiPageWidth: number | string;
}

export const DefaultSettings: JournalSettings = {
  id: 1,
  siteName: "Journal",
  wikiPageWidth: 800,
};
