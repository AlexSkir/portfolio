import React from 'react';
import { useTranslation } from 'react-i18next';
import Typography from '@mui/material/Typography';
import CollapsibleTable from './CollapsibleTable';

/* t('projects.chat.description', { joinArrays: ' ', ns: 'projects' }) */
const withTranslation = (t) => {
  return [
    {
      name: t('projects.piskel.more.canvas.name', { ns: 'projects' }),
      features: t('projects.piskel.more.canvas.features', {
        returnObjects: true,
        ns: 'projects',
      }),
    },
    {
      name: t('projects.piskel.more.google.name', { ns: 'projects' }),
      features: t('projects.piskel.more.google.features', {
        returnObjects: true,
        ns: 'projects',
      }),
    },
    {
      name: t('projects.piskel.more.store.name', { ns: 'projects' }),
      features: t('projects.piskel.more.store.features', {
        returnObjects: true,
        ns: 'projects',
      }),
    },
    {
      name: t('projects.piskel.more.user.name', { ns: 'projects' }),
      features: t('projects.piskel.more.user.features', {
        returnObjects: true,
        ns: 'projects',
      }),
    },
  ];
};

export default function Piskel() {
  const { t } = useTranslation();
  return (
    <>
      <Typography variant="h6">{t('projects.features', { ns: 'projects' })}</Typography>
      <CollapsibleTable features={withTranslation(t)} />
    </>
  );
}
