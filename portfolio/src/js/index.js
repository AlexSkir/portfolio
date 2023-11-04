import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './i18n';
import '../assets/files/sitemap.xml';

const app = <App />;

ReactDOM.render(app, document.querySelector('#root'));
