export declare type EditorSideTabState = {
    sideTab: SideTab | undefined;
    handleSideTabChange(sideTab: SideTab): void;
};
export declare enum SideTab {
    Outline = 0,
    Code = 1,
    Templates = 2,
    Image = 3,
    Help = 4
}
export declare const useEditorSideTabState: () => EditorSideTabState;
