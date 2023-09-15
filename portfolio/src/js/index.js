import React from 'react';
import ReactDOM, { hydrate, render } from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './i18n';

const app = (
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

ReactDOM.render(app, document.querySelector('#root'));

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(app, rootElement);
} else {
  ReactDOM.render(app, rootElement);
}
