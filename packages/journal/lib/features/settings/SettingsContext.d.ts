import { ChangeEvent, ReactNode } from "react";
import { JournalSettings } from "./JournalSettings";
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
declare type keys = keyof JournalSettings;
declare type SettingsChange = {
    [key in keys]?: JournalSettings[key];
};
export interface SettingsProviderProps {
    children: ReactNode;
}
export declare const useSettings: () => SettingsContextValue;
export declare const SettingsProvider: (props: SettingsProviderProps) => JSX.Element;
export {};
