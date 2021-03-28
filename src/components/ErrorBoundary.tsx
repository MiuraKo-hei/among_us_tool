import React from "react";
import { Persistor } from "redux-persist/es/types";

type State = {
  hasError: boolean;
};
type Props = React.PropsWithChildren<{
  persistor: Persistor;
}>;

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render(): React.ReactNode {
    const clearLocalStorage = async () => {
      await this.props.persistor.purge();
      window.location.reload();
    };
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <>
          <h2>Error</h2>
          <button
            onClick={() => {
              clearLocalStorage();
            }}
          >
            reload.
          </button>
        </>
      );
    }

    return this.props.children;
  }
}
