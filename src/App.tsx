import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { CssBaseline } from "@material-ui/core";
import theme from "./theme";
import { FunctionComponent } from "react";
import { Provider } from "react-redux";
import {
  MuiThemeProvider,
  StylesProvider as MuiStylesProvider,
} from "@material-ui/core/styles";
import AmongUsTool from "./components/AmongUsTool";

import { PersistGate } from "redux-persist/integration/react";
import ErrorBoundary from "./components/ErrorBoundary";
import configureStore from "./configureStore";

const App: FunctionComponent = () => {
  const { store, persistor } = configureStore();
  return (
    <>
      <CssBaseline />
      <MuiStylesProvider injectFirst>
        <StyledThemeProvider theme={theme}>
          <MuiThemeProvider theme={theme}>
            <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                <ErrorBoundary persistor={persistor}>
                  <AmongUsTool />
                </ErrorBoundary>
              </PersistGate>
            </Provider>
          </MuiThemeProvider>
        </StyledThemeProvider>
      </MuiStylesProvider>
    </>
  );
};

export default App;
