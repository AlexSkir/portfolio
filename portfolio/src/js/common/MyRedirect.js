import React from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

const locales = ['en', 'ru'];

export const checkLocale = (pathname, lang) => {
  const checkUrl = locales.filter((locale) => pathname.indexOf(`/${locale}`) > -1);
  const locale = checkUrl.length > 0 ? checkUrl[0] : false;
  const sameLang = locale === lang;
  let mustRedirect = false;

  if (locale) {
    console.log('locale: ', locale);
    if (sameLang) {
      console.log('same lang');
    } else {
      console.log(`url has other locale, must redirect to nextLang: ${lang}`);
      mustRedirect = { locale, lang };
    }
  } else {
    console.log('no locale, redirect to: ', lang);
    mustRedirect = { locale, lang };
  }
  return mustRedirect;
};

export function MyRedirect() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const lang = i18n.resolvedLanguage;

  React.useEffect(() => {
    const mustSwitch = checkLocale(pathname, lang);
    if (mustSwitch) {
      const { locale, lang } = mustSwitch;
      if (locale) {
        if (lang) {
          // i18n.getFixedT(locale);
          // i18n.changeLanguage(locale);
        }
      } else {
        navigate(`/${lang}`, { replace: true });
        // navigate(`/ru${pathname}`, { replace: true });
      }
    }
  }, [pathname]);

  return (
    <>
      <a href="/ru" hidden>
        navigate to russian website
      </a>
      <a href="/en" hidden>
        navigate to english website
      </a>
      <Outlet />
    </>
  );
}
