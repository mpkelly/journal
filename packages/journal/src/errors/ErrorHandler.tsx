import React from "react";
import { ErrorPageProps, ErrorPage } from "./ErrorPage";

export interface ErrorHandlerprops extends ErrorPageProps {
  children: JSX.Element | JSX.Element[];
}

export interface ErrorHandlerState {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<
  ErrorHandlerprops,
  ErrorHandlerState
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    //Lame error handling - check!
    //V2 will contain something more sophisticated e.g. an alert :-)
    console.log(error, errorInfo);
  }

  render() {
    const { children, handleGoBack } = this.props;
    if (this.state.hasError) {
      return <ErrorPage handleGoBack={handleGoBack} />;
    }

    return children;
  }
}
