/// <reference types="react" />
export declare const CollectionsTreeStateProvider: import("react").FunctionComponent<unknown>, useCollectionsTreeState: import("constate/dist/ts/src/types").ContextHookFunction<{
    collections: import("../file/File").File[];
    addCollection: () => void;
    updateFile: (item: import("../file/File").File) => Promise<void>;
}>;
