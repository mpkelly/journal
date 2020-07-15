/// <reference types="react" />
export declare const CollectionsTreeStateProvider: import("react").FunctionComponent<unknown>, useCollectionsTreeState: import("constate/dist/ts/src/types").ContextHookFunction<{
    collections: import("../file/File").File[];
    addCollection: () => void;
    updateFiles: (files: import("../file/File").File[], property: string | number, value: any) => Promise<void>;
}>;
