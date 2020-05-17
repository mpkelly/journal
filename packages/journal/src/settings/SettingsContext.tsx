import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useRef,
  ChangeEvent,
} from "react";
import { JournalSettings } from "./JournalSettings";
import { useDatabase } from "../database/Databases";
import { downloadBlob } from "../util/Urls";

export interface SettingsContextValue {
  settings: JournalSettings;
  updateSettings(change: SettingsChange): Promise<any>;
  handleExport(): void;
  handleImport(): void;
  handleImportRef(ref: HTMLInputElement | null): void;
  handleImportFile(event: ChangeEvent<HTMLInputElement>): void;
}

type keys = keyof JournalSettings;
type SettingsChange = { [key in keys]?: JournalSettings[key] };

const Context = createContext<SettingsContextValue>({} as SettingsContextValue);

export interface SettingsProviderProps {
  children: any;
}

export const useSettings = () => {
  return useContext(Context);
};

export const SettingsProvider = (props: SettingsProviderProps) => {
  const [settings, setSettings] = useState<JournalSettings>(
    (null as unknown) as JournalSettings
  );
  const importRef = useRef<HTMLInputElement | null>(null);
  const db = useDatabase();

  const loadSettings = () => {
    return db.getSettings().then((settings) => {
      setSettings(settings);
    });
  };

  const updateSettings = async (change: SettingsChange) => {
    const next = { ...settings, ...change };
    setSettings(next);
    await db.updateSettings(next);
  };

  const handleExport = async () => {
    const blob = await db.exportDb();
    downloadBlob(blob, "journal-backup.jbf");
  };

  const handleImport = () => {
    if (importRef.current) {
      importRef.current.click();
    }
  };

  const handleImportRef = (ref: HTMLInputElement) => {
    importRef.current = ref;
  };

  const handleImportFile = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.files) {
      const file = event.currentTarget.files[0];
      db.importDb(file);
    }
  };

  useEffect(() => {
    loadSettings();
  }, []);

  const value = {
    settings,
    updateSettings,
    handleExport,
    handleImportRef,
    handleImport,
    handleImportFile,
  };

  if (!settings) {
    return null;
  }

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};
