import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { App } from 'components/App';
import './index.css';

const theme = {};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/blended39_group1/">
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
