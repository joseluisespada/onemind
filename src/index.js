import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import App from './App';
import reportWebVitals from './reportWebVitals';
import makeServer from "./lib/server";

if (
  process.env.NODE_ENV === "development" &&
  typeof makeServer === "function"
) {
  makeServer(); 
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.querySelector('#root'),
);

reportWebVitals();
