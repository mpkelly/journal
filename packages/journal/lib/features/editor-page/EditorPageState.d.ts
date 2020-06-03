/// <reference types="react" />
export declare const EditorStateProvider: import("react").FunctionComponent<import("./EditorPage").EditorPageProps>, useEditorState: import("constate/dist/ts/src/types").ContextHookFunction<{
    file: import("../file/File").File;
    saved: boolean;
    value: import("@mpkelly/react-editor-kit").Element[];
    instantSave: () => void;
    handleToggleLocked: () => void;
    handleChange: (next: import("@mpkelly/react-editor-kit").Element[]) => void;
    readOnly: boolean;
    handleRestorePreviousValue: () => void;
}>;
export declare const EditorSideTabStateProvider: import("react").FunctionComponent<unknown>, useEditorSideTabState: import("constate/dist/ts/src/types").ContextHookFunction<import("./EditorSideTabState").EditorSideTabState>;
export declare const CodeEditorStateProvider: import("react").FunctionComponent<import("../code-editor/CodeEditorState").CodeEditorStateProps>, useCodeEditorState: import("constate/dist/ts/src/types").ContextHookFunction<{
    codes: import("../code-editor/CodeFile").CodeFile[];
    activeCode: import("../code-editor/CodeFile").CodeFile;
    handleCreate: (type: import("../code-editor/CodeFile").CodeType) => void;
    handleChange: (data: import("@mpkelly/react-editor-kit").Node[]) => void;
    handleSetActive: (activeCode: import("../code-editor/CodeFile").CodeFile) => void;
    handleExecuteCode: () => void;
    handleUnlinkCode: (code: import("../code-editor/CodeFile").CodeFile) => void;
    handleLinkCode: (ids: string[]) => void;
    showLinkCodeDialog: import("react-hanger/useBoolean").UseBoolean;
}>;
