import { notFound } from 'next/navigation';

const languages = ['en', 'ru'];

const dictionaries = {
  en: (ns) => import(`./locales/en/${ns}.json`).then((module) => module.default),
  ru: (ns) => import(`./locales/ru/${ns}.json`).then((module) => module.default),
};

export default async function getDictionary(locale, ns = 'translation') {
  if (languages.indexOf(locale) === -1) {
    // notFound();
  }
  if (dictionaries[locale]) {
    return dictionaries[locale](ns);
  }
  return dictionaries.ru(ns);
}
