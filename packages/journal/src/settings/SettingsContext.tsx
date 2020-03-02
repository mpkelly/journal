import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useRef,
  ChangeEvent
} from "react";
import { WikiSettings } from "./WikiSettings";
import { useDatabase } from "../database/Databases";
import { downloadBlob } from "../util/Urls";

export interface SettingsContextValue {
  settings: WikiSettings;
  updateSettings(change: SettingsChange): Promise<any>;
  handleExport(): void;
  handleImport(): void;
  handleImportRef(ref: HTMLInputElement | null): void;
  handleImportFile(event: ChangeEvent<HTMLInputElement>): void;
}

type keys = keyof WikiSettings;
type SettingsChange = { [key in keys]?: WikiSettings[key] };

const Context = createContext<SettingsContextValue>({} as SettingsContextValue);

export interface SettingsProviderProps {
  children: any;
}

export const useSettings = () => {
  return useContext(Context);
};

export const SettingsProvider = (props: SettingsProviderProps) => {
  const [settings, setSettings] = useState<WikiSettings>(
    (null as unknown) as WikiSettings
  );
  const importRef = useRef<HTMLInputElement | null>(null);
  const db = useDatabase();

  const loadSettings = () => {
    return db.loadSettings().then(settings => {
      setSettings(settings);
    });
  };

  const updateSettings = async (change: SettingsChange) => {
    const next = { ...settings, ...change };
    setSettings(next);
    await db.updateSettings(settings);
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
    handleImportFile
  };

  if (!settings) {
    return null;
  }

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};
