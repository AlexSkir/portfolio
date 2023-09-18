import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEn from './locales/en/translation.json';
import translationRu from './locales/ru/translation.json';
import projectEn from './locales/en/projects.json';
import projectRu from './locales/ru/projects.json';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: ['en', 'ru'],
    ns: ['translation', 'projects'],
    defaultNS: 'translation',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: translationEn,
        projects: projectEn,
      },
      ru: {
        translation: translationRu,
        projects: projectRu,
      },
    },
  });

export default i18n;
