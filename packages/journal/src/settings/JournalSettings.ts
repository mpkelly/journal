export interface JournalSettings {
  id: 1;
  wikiName: string;
  contentWidth: string | number;
  logo: string;
  logoScale: number;
  borderRadius: number;
}

export const DefaultSettings: JournalSettings = {
  id: 1,
  wikiName: "Journal",
  contentWidth: 700,
  logo: "",
  logoScale: 1,
  borderRadius: 0
};
