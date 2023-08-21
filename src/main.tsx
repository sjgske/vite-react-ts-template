import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './routes';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from 'styles/GlobalStyles';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </React.StrictMode>,
);
