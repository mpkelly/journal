import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useRef,
  ChangeEvent,
  ReactNode,
  useCallback,
} from "react";
import { JournalSettings } from "./JournalSettings";
import { useDatabase } from "../database/DatabaseState";
import { downloadBlob } from "../../util/Urls";
import { insertDefaultDbContent } from "../database/JournalDatabase";

export interface SettingsContextValue {
  settings: JournalSettings;
  handleSettingsChange(change: SettingsChange): Promise<any>;
  handleExport(): void;
  handleImport(): void;
  handleImportRef(ref: HTMLInputElement | null): void;
  handleImportFile(event: ChangeEvent<HTMLInputElement>): void;
  handleFile(file: File): void;
  handleConfirmImport(): void;
  handleCancelImport(): void;
  showImportDialog: boolean;
}

type keys = keyof JournalSettings;
type SettingsChange = { [key in keys]?: JournalSettings[key] };

const Context = createContext<SettingsContextValue>({} as SettingsContextValue);

export interface SettingsProviderProps {
  children: ReactNode;
}

export const useSettings = () => {
  return useContext(Context);
};

export const SettingsProvider = (props: SettingsProviderProps) => {
  const [settings, setSettings] = useState<JournalSettings>(
    (null as unknown) as JournalSettings
  );

  const [showImportDialog, setShowImportDialog] = useState(false);

  const importRef = useRef<HTMLInputElement | null>(null);
  const fileRef = useRef<File | null>(null);

  const db = useDatabase();

  useEffect(() => {
    db.getSettings().then((settings) => {
      if (!settings.defaultsCreated) {
        insertDefaultDbContent();
        db.updateSettings({ ...settings, defaultsCreated: true });
      }
    });
  }, []);

  const loadSettings = () => {
    return db.getSettings().then((settings) => {
      setSettings(settings);
    });
  };

  const handleSettingsChange = async (change: SettingsChange) => {
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
      handleFile(file);
    }
  };

  const handleFile = async (file: File) => {
    fileRef.current = file;
    setShowImportDialog(true);
  };

  const handleConfirmImport = useCallback(async () => {
    await db.importDb(fileRef.current as File);
    window.location.reload();
  }, [fileRef.current]);

  const handleCancelImport = () => {
    fileRef.current = null;
    setShowImportDialog(false);
  };

  useEffect(() => {
    loadSettings();
  }, []);

  const value = {
    settings,
    handleSettingsChange,
    handleExport,
    handleImportRef,
    handleImport,
    handleImportFile,
    handleFile,
    handleConfirmImport,
    showImportDialog,
    handleCancelImport,
  };

  if (!settings) {
    return null;
  }

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};
