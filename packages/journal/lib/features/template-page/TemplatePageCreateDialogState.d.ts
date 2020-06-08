/// <reference types="react" />
import { FlatNode } from "@mpkelly/react-tree";
import { File } from "../file/File";
import { Substitution } from "../substitution/Substitution";
export declare enum Tabs {
    FileInfo = 0,
    Substitutions = 1
}
export declare const templatePageCreateDialogState: () => {
    tab: Tabs;
    newFile: File;
    substitutions: Substitution[];
    handleCreate: (template: File) => Promise<void>;
    handleCancelCreate: () => void;
    handleConfirmCreate: () => void;
    handleSubstitutionChange: (index: number, value: string) => void;
    handleUpdateNewFile: (changes: Partial<File>) => void;
    handleNextTab: () => void;
    hasNextTab: boolean;
    collections: FlatNode[];
};
export declare const TemplatePageCreateDialogStateProvider: import("react").FunctionComponent<unknown>, useTemplatePageCreateDialogState: import("constate/dist/ts/src/types").ContextHookFunction<{
    tab: Tabs;
    newFile: File;
    substitutions: Substitution[];
    handleCreate: (template: File) => Promise<void>;
    handleCancelCreate: () => void;
    handleConfirmCreate: () => void;
    handleSubstitutionChange: (index: number, value: string) => void;
    handleUpdateNewFile: (changes: Partial<File>) => void;
    handleNextTab: () => void;
    hasNextTab: boolean;
    collections: FlatNode[];
}>;
