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

const App: FunctionComponent = () => {
  const store = configureStore({
    reducer: rootReducer,
  });
  return (
    <>
      <CssBaseline />
      <MuiStylesProvider injectFirst>
        <StyledThemeProvider theme={theme}>
          <MuiThemeProvider theme={theme}>
            <Provider store={store}>
              <AmongUsTool />
            </Provider>
          </MuiThemeProvider>
        </StyledThemeProvider>
      </MuiStylesProvider>
    </>
  );
};

export default App;
