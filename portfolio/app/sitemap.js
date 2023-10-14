import projectArr from './[lng]/portfolio/projectsArray';
import en from './i18n/locales/en/projects.json';
import ru from './i18n/locales/ru/projects.json';

const URL = 'https://alexskir.ru';

export default async function sitemap() {
  const enProjects = Object.keys(projectArr(en)).map((project) => ({
    url: `${URL}/en/portfolio/${project}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.5,
  }));
  const ruProjects = Object.keys(projectArr(ru)).map((project) => ({
    url: `${URL}/ru/portfolio/${project}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.5,
  }));

  const enRoutes = ['', 'portfolio', 'resume', 'contact'].map((route) => ({
    url: `${URL}/en/${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1,
  }));
  const ruRoutes = ['', 'portfolio', 'resume', 'contact'].map((route) => ({
    url: `${URL}/ru/${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1,
  }));

  return [...enRoutes, ...ruRoutes, ...enProjects, ...ruProjects];
}
