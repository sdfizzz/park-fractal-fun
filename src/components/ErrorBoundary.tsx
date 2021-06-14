import React from 'react';

type PropsType = {
  children: React.ReactNode;
};

type StateType = {
  hasError: boolean;
  message?: string;
};

class ErrorBoundary extends React.Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, message: error.message };
  }

  // You can also log the error to an error reporting service
  // componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
  //
  // }

  render() {
    const { hasError, message } = this.state;
    if (hasError) {
      return <h1>Something went wrong. Message: {message}</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
