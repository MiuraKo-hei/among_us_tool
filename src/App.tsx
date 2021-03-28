import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { CssBaseline } from "@material-ui/core";
import theme from "./theme";
import { FunctionComponent } from "react";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./modules";
import { Provider } from "react-redux";
import {
  MuiThemeProvider,
  StylesProvider as MuiStylesProvider,
} from "@material-ui/core/styles";
import AmongUsTool from "./components/AmongUsTool";
import { persistStore, persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";

const App: FunctionComponent = () => {
  const persistConfig = {
    key: "root-v1",
    storage,
  };
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = configureStore({
    reducer: persistedReducer,
  });
  const persistor = persistStore(store);
  return (
    <>
      <CssBaseline />
      <MuiStylesProvider injectFirst>
        <StyledThemeProvider theme={theme}>
          <MuiThemeProvider theme={theme}>
            <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                <AmongUsTool />
              </PersistGate>
            </Provider>
          </MuiThemeProvider>
        </StyledThemeProvider>
      </MuiStylesProvider>
    </>
  );
};

export default App;
