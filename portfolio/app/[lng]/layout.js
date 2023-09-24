import React from 'react';
import PropTypes from 'prop-types';
import { dir } from 'i18next';
import { cookies } from 'next/headers';
import { languages } from '../i18n/settings';
import styles from './style.module.scss';
import enSeo from '../i18n/locales/en/seo.json';
import ruSeo from '../i18n/locales/ru/seo.json';

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const { lng } = params;

  // fetch data
  // const product = await fetch(`https://.../${id}`).then((res) => res.json())

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []
  const seo = lng === 'en' ? enSeo.common : ruSeo.common;

  return {
    title: seo.title,
    description: seo.description,
    /* openGraph: {
      images: ['/some-specific-page-image.jpg', ...previousImages],
    }, */
  };
}
export default function RootLayout({ children, params: { lng } }) {
  let localTheme;
  if (cookies().get('myColorMode')) {
    localTheme = cookies().get('myColorMode').value;
  }

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

            body.light {
              background: #F2F5F9;
            }

            body.dark {
              background: rgb(35, 35, 35);
            }`}
        </style>
      </head>
      <body className={localTheme || 'defaultTheme'}>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
  params: PropTypes.object.isRequired,
};
