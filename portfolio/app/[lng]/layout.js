/* eslint-disable @next/next/no-img-element */
/* eslint-disable max-len */
/* eslint-disable react/jsx-wrap-multilines */
import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { notFound } from 'next/navigation';
import { dir } from 'i18next';
import { cookies } from 'next/headers';
import Script from 'next/script';
import { languages } from '../i18n/settings';
import ScrollTop from './components/common/ScrollTop';
import LoadingApp from './components/common/LoadingApp';
import Loading from './loading';
import getDictionary from '../i18n/dictionaries';
import Poster from './assets/projects/share/portfolio.png';
import Poster_alt from './assets/projects/share/portfolio_alt.png';
import './style.scss';
import LoadingBlock from './components/common/LoadingBlock';

const Header = lazy(() => import('./components/Header'));
const Footer = lazy(() => import('./components/Footer'));
const Navbar = lazy(() => import('./components/Navbar'));
const Wrapper = lazy(() => import('./components/Wrapper'));

const keywords = [
  'Frontend',
  'React',
  'JS',
  'Javascript',
  'Web development',
  'AlexSkir',
  'create website',
  'freelance',
  'Skirnevskaia',
  'Aleksandra Skirnevskaia',
  'разработка сайтов',
  'фронтенд разработчик',
  'веб разработка',
  'фриланс',
  'Александра Скирневская',
  'Скирневская',
];

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export async function generateMetadata({ params }) {
  // read route params
  const { lng } = params;
  if (languages.indexOf(lng) === -1) {
    notFound();
  }
  const seo = await getDictionary(lng, 'seo');

  return {
    metadataBase: new URL('https://alexskir.ru'),
    title: seo.common.title,
    description: seo.common.description,
    generator: 'Next.js',
    keywords,
    creator: seo.name,
    openGraph: {
      title: seo.common.title,
      description: seo.common.description,
      url: 'https://alexskir.ru',
      siteName: 'Portfolio',
      images: [
        {
          url: Poster.src,
          width: 1200,
          height: 630,
          alt: 'Aleksandra Skirnevskaia - Portfolio',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@alex_skir',
    },
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: '#F2F5F9' },
      { media: '(prefers-color-scheme: dark)', color: 'rgb(35, 35, 35)' },
    ],
    verification: {
      google: 'tW9sgpMF9kIZXz9Y_mfT00e-37QuSdFSdkirRNUNhIU',
      yandex: 'a7156f0372045afd',
    },
  };
}
export default async function RootLayout({ children, params: { lng } }) {
  let defaultTheme = 'light';
  if (typeof window !== 'undefined') {
    defaultTheme = window?.matchMedia?.('(prefers-color-scheme:dark)')?.matches ? 'dark' : 'light';
  }
  if (cookies().get('myColorMode')) {
    defaultTheme = cookies().get('myColorMode').value;
  }
  const layout = await getDictionary(lng);

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
        <Script id="94952225" type="text/javascript">
          {`(function (m, e, t, r, i, k, a) {
              m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments) };
              m[i].l = 1 * new Date();
              for (var j = 0; j < document.scripts.length; j++) { if (document.scripts[j].src === r) { return; } }
              k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
            })
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(94952225, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true
            });`}
        </Script>
      </head>
      <body className={defaultTheme}>
        <noscript style={{ display: 'block', margin: '50px auto', textAlign: 'center' }}>
          You need to enable JavaScript to run this app.
        </noscript>
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/94952225"
              style={{ position: 'absolute', left: '-9999px' }}
              alt=""
            />
          </div>
        </noscript>
        <div id="root">
          <Suspense fallback={<LoadingApp />}>
            <Wrapper>
              <div className="container-mainWrapper">
                <Suspense fallback={<LoadingBlock width="100%" height="42px" />}>
                  <Header lng={lng} t={layout} />
                </Suspense>
                <Suspense
                  fallback={
                    <LoadingBlock
                      width="100%"
                      height="100px"
                      variant="rounded"
                      style={{ maxWidth: '500px' }}
                    />
                  }
                >
                  <Navbar lng={lng} t={layout} />
                </Suspense>

                <div className="container-mainWrapper__main-layout">
                  <ScrollTop />
                  <Suspense fallback={<Loading />}>{children}</Suspense>
                </div>
                <Footer lng={lng} />
              </div>
            </Wrapper>
          </Suspense>
        </div>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
  params: PropTypes.object.isRequired,
};
