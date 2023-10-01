import React from 'react';
import ReactDOM, { hydrate, render } from 'react-dom';
// import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './i18n';
import '../assets/files/sitemap.xml';

const app = (
  <>
    <App />
  </>
);

// ReactDOM.render(app, document.querySelector('#root'));

const rootElement = document.getElementById('root'); // (или ваш id при олтличии)
if (rootElement.hasChildNodes()) {
  // …Если в корневом элементе есть контент, то…
  hydrate(app, rootElement); // …"цепляем" приложение на существующий DOM.
} else {
  // …Иначе рендерим приложение стандартным образом
  render(app, rootElement);
}
