import React from 'react';
import { useTranslation } from 'react-i18next';
import Typography from '@mui/material/Typography';
import CollapsibleTable from './[project]/CollapsibleTable';

/* t('projects.chat.description', { joinArrays: ' ', ns: 'projects' }) */
const withTranslation = (t) => {
  return [
    {
      name: t('projects.culturePortal.more.homePage.name', { ns: 'projects' }),
      link: {
        title: t('projects.visit', { ns: 'projects' }),
        url: 'https://rss-group10-photographers.netlify.app/',
      },
      features: t('projects.culturePortal.more.homePage.features', {
        returnObjects: true,
        ns: 'projects',
      }),
      type: t('projects.library', { ns: 'projects' }),
    },
    {
      name: t('projects.culturePortal.more.persPage.name', { ns: 'projects' }),
      link: {
        title: t('projects.visit', { ns: 'projects' }),
        url: 'https://rss-group10-photographers.netlify.app/ru/photographers/person1/',
      },
      features: t('projects.culturePortal.more.persPage.features', {
        returnObjects: true,
        ns: 'projects',
      }),
      type: t('projects.library', { ns: 'projects' }),
    },
    {
      name: t('projects.culturePortal.more.allPers.name', { ns: 'projects' }),
      link: {
        title: t('projects.visit', { ns: 'projects' }),
        url: 'https://rss-group10-photographers.netlify.app/ru/photographers/',
      },
      features: t('projects.culturePortal.more.allPers.features', {
        returnObjects: true,
        ns: 'projects',
      }),
      type: t('projects.library', { ns: 'projects' }),
    },
  ];
};

export default function CulturePortal() {
  const { t } = useTranslation();
  return (
    <>
      <Typography variant="h6">{t('projects.features', { ns: 'projects' })}</Typography>
      <CollapsibleTable features={withTranslation(t)} />
    </>
  );
}
