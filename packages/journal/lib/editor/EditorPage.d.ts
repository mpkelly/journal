import { RouteComponentProps } from "react-router";
export interface EditorPageProps extends RouteComponentProps<RouteParams> {
}
export interface RouteParams {
    collectionId: string;
    itemId: string;
}
export declare const EditorPage: (props: EditorPageProps) => JSX.Element;
