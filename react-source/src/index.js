import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { ThemeProvider } from "@material-ui/styles";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { LayoutProvider } from "./context/LayoutContext";
import {
  ThemeProvider as ThemeChangeProvider,
  ThemeStateContext
} from "./context/ThemeContext";
import { CssBaseline } from "@material-ui/core";
import config from "../src/config";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store';

axios.defaults.baseURL = config.baseURLApi;
axios.defaults.headers.common["Content-Type"] = "application/json";


ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <LayoutProvider>
        <ThemeChangeProvider>
          <ThemeStateContext.Consumer>
            {theme => (
              <ThemeProvider theme={theme}>
                <CssBaseline />
                <App />
              </ThemeProvider>
            )}
          </ThemeStateContext.Consumer>
        </ThemeChangeProvider>
      </LayoutProvider>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
