import React from "react";
import { ErrorPageProps } from "./ErrorPage";
export interface ErrorHandlerprops extends ErrorPageProps {
    children: JSX.Element | JSX.Element[];
}
export interface ErrorHandlerState {
    hasError: boolean;
}
export declare class ErrorBoundary extends React.Component<ErrorHandlerprops, ErrorHandlerState> {
    constructor(props: any);
    static getDerivedStateFromError(): {
        hasError: boolean;
    };
    componentDidCatch(error: any, errorInfo: any): void;
    render(): JSX.Element | JSX.Element[];
}
