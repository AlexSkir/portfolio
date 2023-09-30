import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { dir } from 'i18next';
import { cookies } from 'next/headers';
import { languages } from '../i18n/settings';
import enSeo from '../i18n/locales/en/seo.json';
import ruSeo from '../i18n/locales/ru/seo.json';
import Wrapper from './components/Wrapper';
import ScrollTop from './components/common/ScrollTop';
import LoadingApp from './components/common/LoadingApp';
import Loading from './loading';
import './style.scss';

const Header = lazy(() => import('./components/Header'));
const Footer = lazy(() => import('./components/Footer'));
const Navbar = lazy(() => import('./components/Navbar'));

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export async function generateMetadata({ params }, parent) {
  // read route params
  const { lng } = params;

  // fetch data
  // const product = await fetch(`https://.../${id}`).then((res) => res.json())

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []
  const seo = lng === 'en' ? enSeo.common : ruSeo.common;

  return {
    title: seo.title,
    description: seo.description.join(' '),
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
    <html lang={lng} dir={dir(lng)} className={localTheme || 'light'}>
      <head>
        <style>
          {`@media (prefers-color-scheme: dark) {
              html {
                background: rgb(35, 35, 35);
              }
            }
            @media (prefers-color-scheme: light) {
              html {
                background: #F2F5F9;
              }
            }

            html.light {
              background: #F2F5F9;
            }

            html.dark {
              background: rgb(35, 35, 35);
            }`}
        </style>
      </head>
      <body>
        <div id="root" className="app_appContainer">
          <Wrapper>
            <Suspense fallback={<LoadingApp />}>
              <Header lng={lng} />
              <Navbar lng={lng} />

              <div className="container-mainWrapper__main-layout">
                <ScrollTop />
                <Suspense fallback={<Loading />}>{children}</Suspense>
              </div>
              <Footer lng={lng} />
            </Suspense>
          </Wrapper>
        </div>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
  params: PropTypes.object.isRequired,
};
