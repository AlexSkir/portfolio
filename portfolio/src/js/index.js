import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './i18n';

const app = (
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

ReactDOM.render(app, document.querySelector('#root'));
