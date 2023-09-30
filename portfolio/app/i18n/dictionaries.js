const dictionaries = {
  en: (ns) => import(`./locales/en/${ns || 'translation'}.json`).then((module) => module.default),
  ru: (ns) => import(`./locales/ru/${ns || 'translation'}.json`).then((module) => module.default),
};

export async function getDictionary(locale, ns) {
  return dictionaries[locale](ns);
}
