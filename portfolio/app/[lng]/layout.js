import React from 'react';
import PropTypes from 'prop-types';
import Script from 'next/script';
import { dir } from 'i18next';
import { languages } from '../i18n/settings';

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({ children, params: { lng } }) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head>
        <style>
          {`@media (prefers-color-scheme: dark) {
              body {
                background: rgb(35, 35, 35);
              }
            }
            @media (prefers-color-scheme: light) {
              body {
                background: #F2F5F9;
              }
            }

            body.lightTheme {
              background: #F2F5F9;
            }

            body.darkTheme {
              background: rgb(35, 35, 35);
            }`}
        </style>
      </head>
      <body>
        <Script id="defaultTheme">
          {`const selectedTheme = localStorage.getItem('myColorMode');
            if (selectedTheme === 'dark') {
              document.body.classList.add('darkTheme')
            } else if (selectedTheme === 'light') {
              document.body.classList.add('lightTheme')
            }`}
        </Script>

        <div id="root">{children}</div>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
  params: PropTypes.object.isRequired,
};
