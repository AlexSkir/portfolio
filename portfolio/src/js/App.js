import { hot } from 'react-hot-loader';
import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from './common/SEO';
import AppRouter from './routes';
import Avatar from '../assets/images/portfolio.png';
import ThemeWrapper from './common/ThemeWrapper';

const App = () => {
  const { i18n, t } = useTranslation();
  const lang = i18n.resolvedLanguage;
  const { protocol, host, pathname } = window.location;

  React.useEffect(() => {
    console.log('enter app, host: ', host);
    const locales = ['en', 'ru'];

    const sameLang = host.indexOf(`${lang}.`) > -1;
    const anyLocale = locales.some((locale) => host.indexOf(`${locale}.`) > -1);

    if (anyLocale) {
      if (sameLang) {
        // console.log('same lang, no switch');
      } else {
        // console.log('other lang, switching');
        const hostArr = host.split('.');
        const newLang = hostArr[0];
        i18n.changeLanguage(newLang);
      }
    } else {
      // console.log('there is no locale, redirecting to prefered language');
      // window.location = `${protocol}//${lang}.${host}${pathname}`;
    }
  }, [host]);

  return (
    <ThemeWrapper>
      <SEO
        image={Avatar}
        title={t('common.seo.title')}
        description={t('common.seo.description', { joinArrays: ' ' })}
        path="/"
      />
      <AppRouter />
    </ThemeWrapper>
  );
};

export default hot(module)(App);
