import {
  MuiThemeProvider,
  StylesProvider as MuiStylesProvider,
} from "@material-ui/core/styles";
import styled, {
  ThemeProvider as StyledThemeProvider,
} from "styled-components";
import { Typography } from "@material-ui/core";
import theme from "./theme";
import { FunctionComponent } from "react";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./modules";
import { Provider } from "react-redux";

const Title = styled(Typography).attrs({ variant: "h2" })``;

const App: FunctionComponent = () => {
  const store = configureStore({
    reducer: rootReducer,
  });
  return (
    <MuiStylesProvider injectFirst>
      <StyledThemeProvider theme={theme}>
        <MuiThemeProvider theme={theme}>
          <Provider store={store}>
            <Title>Hello React</Title>
          </Provider>
        </MuiThemeProvider>
      </StyledThemeProvider>
    </MuiStylesProvider>
  );
};

export default App;
