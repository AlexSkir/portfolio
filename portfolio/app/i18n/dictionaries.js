const dictionaries = {
  en: (ns) => import(`./locales/en/${ns}.json`).then((module) => module.default),
  ru: (ns) => import(`./locales/ru/${ns}.json`).then((module) => module.default),
};

export default async function getDictionary(locale, ns = 'translation') {
  return dictionaries[locale](ns);
}
