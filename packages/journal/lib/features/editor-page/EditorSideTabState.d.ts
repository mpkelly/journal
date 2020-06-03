export declare type EditorSideTabState = {
    sideTab: SideTab | undefined;
    handleSideTabChange(sideTab: SideTab): void;
};
export declare enum SideTab {
    Outline = 0,
    Code = 1,
    Templates = 2,
    Image = 3
}
export declare const useEditorSideTabState: () => EditorSideTabState;
