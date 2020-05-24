import React from "react";
import { ErrorPageProps, ErrorPage } from "./ErrorPage";

export interface ErrorHandlerprops extends ErrorPageProps {
  children: JSX.Element | JSX.Element[];
  autoRollback?: boolean;
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
    console.log(error, errorInfo);
  }

  handleGoBack = () => {
    this.setState({ hasError: false });
    this.props.handleGoBack();
  };

  render() {
    const { children } = this.props;
    if (this.state.hasError) {
      return <ErrorPage handleGoBack={this.handleGoBack} />;
    }

    return children;
  }
}
