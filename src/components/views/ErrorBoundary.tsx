import * as React from "react";

interface Props {
  fallback: React.ComponentType;
}

interface StateType {
  hasError: false;
  error: any;
}

export default class ErrorBoundary extends React.Component<Props> {
  state: StateType = { hasError: false, error: null };
  static getDerivedStateFromError(error:any) {
    return {
      hasError: true,
      error,
    };
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}
