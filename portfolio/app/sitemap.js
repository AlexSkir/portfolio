import projectArr from './[lng]/portfolio/projectsArray';
import en from './i18n/locales/en/projects.json';
import ru from './i18n/locales/ru/projects.json';

const URL = 'https://alexskir.ru';

export default async function sitemap() {
  const enProjects = Object.keys(projectArr(en)).map((project) => ({
    url: `${URL}/en/portfolio/${project}`,
  }));
  const ruProjects = Object.keys(projectArr(ru)).map((project) => ({
    url: `${URL}/ru/portfolio/${project}`,
  }));

  const enRoutes = ['', 'portfolio', 'resume', 'contact'].map((route) => ({
    url: `${URL}/en/${route}`,
  }));
  const ruRoutes = ['', 'portfolio', 'resume', 'contact'].map((route) => ({
    url: `${URL}/ru/${route}`,
  }));

  return [...enRoutes, ...ruRoutes, ...enProjects, ...ruProjects];
}

/* export default function sitemap() {
  return [
    {
      url: 'https://alexskir.ru/',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
  ];
} */
