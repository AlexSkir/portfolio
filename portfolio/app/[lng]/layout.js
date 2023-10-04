import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { dir } from 'i18next';
import { cookies } from 'next/headers';
import { languages } from '../i18n/settings';
import Wrapper from './components/Wrapper';
import ScrollTop from './components/common/ScrollTop';
import LoadingApp from './components/common/LoadingApp';
import Loading from './loading';
import getDictionary from '../i18n/dictionaries';
import Poster from './assets/projects/share/portfolio.png';
import Poster_alt from './assets/projects/share/portfolio_alt.png';
import './style.scss';

const Header = lazy(() => import('./components/Header'));
const Footer = lazy(() => import('./components/Footer'));
const Navbar = lazy(() => import('./components/Navbar'));

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
  const seo = await getDictionary(lng, 'seo');

  return {
    metadataBase: new URL('https://nextjs-portfolio-ydgz.onrender.com'),
    title: seo.common.title,
    description: seo.common.description,
    generator: 'Next.js',
    keywords,
    creator: seo.name,
    openGraph: {
      title: seo.common.title,
      description: seo.common.description,
      url: 'https://nextjs-portfolio-ydgz.onrender.com',
      siteName: 'Portfolio',
      images: [
        {
          url: Poster.src,
          width: 1200,
          height: 630,
          alt: 'Aleksandra Skirnevskaia - Portfolio',
        },
        {
          url: Poster_alt.src,
          width: 900,
          height: 900,
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
      google: 'google',
      yandex: 'yandex',
      yahoo: 'yahoo',
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
      </head>
      <body className={defaultTheme}>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root">
          <Wrapper>
            <Suspense fallback={<LoadingApp />}>
              <div className="container-mainWrapper">
                <Header lng={lng} t={layout} />
                <Navbar lng={lng} t={layout} />

                <div className="container-mainWrapper__main-layout">
                  <ScrollTop />
                  <Suspense fallback={<Loading />}>{children}</Suspense>
                </div>
                <Footer lng={lng} t={layout} />
              </div>
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
