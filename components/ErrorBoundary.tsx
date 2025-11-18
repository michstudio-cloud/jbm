
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
    // You could also log error messages to an error reporting service here
    // logErrorToMyService(error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
          <h1 className="text-4xl md:text-5xl font-bold text-jbm-orange mb-4">¡Algo salió mal!</h1>
          <p className="text-lg text-white/70 mb-8 text-center">
            Lo sentimos, ha ocurrido un error inesperado en la aplicación.
            Por favor, inténtalo de nuevo más tarde o contacta con soporte si el problema persiste.
          </p>
          <button
            className="bg-jbm-orange hover:bg-jbm-red-orange text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
            onClick={() => window.location.reload()}
          >
            Recargar Página
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;