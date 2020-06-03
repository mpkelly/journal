/// <reference types="react" />
import { File } from "../file/File";
import { FlatNode } from "@mpkelly/react-tree";
export declare type Substitution = {
    name: string;
    value: string;
};
export declare enum Tabs {
    FileInfo = 0,
    Substitutions = 1
}
export declare const templatePageCreateDialogState: () => {
    tab: Tabs;
    newFile: File;
    substitutions: Substitution[];
    handleCreate: (template: File) => void;
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
    handleCreate: (template: File) => void;
    handleCancelCreate: () => void;
    handleConfirmCreate: () => void;
    handleSubstitutionChange: (index: number, value: string) => void;
    handleUpdateNewFile: (changes: Partial<File>) => void;
    handleNextTab: () => void;
    hasNextTab: boolean;
    collections: FlatNode[];
}>;
