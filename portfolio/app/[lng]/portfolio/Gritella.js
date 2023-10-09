import React from 'react';
import { useTranslation } from 'react-i18next';
import Typography from '@mui/material/Typography';
import CollapsibleTable from './[project]/CollapsibleTable';

/* t('projects.chat.description', { joinArrays: ' ', ns: 'projects' }) */
const withTranslation = (t) => {
  return [
    {
      name: t('projects.gritella.more.homePage.name', { ns: 'projects' }),
      link: {
        title: t('projects.visit', { ns: 'projects' }),
        url: 'http://d97714j6.beget.tech/',
      },
      features: t('projects.gritella.more.homePage.features', {
        returnObjects: true,
        ns: 'projects',
      }),
    },
    {
      name: t('projects.gritella.more.productPage.name', { ns: 'projects' }),
      link: {
        title: t('projects.visit', { ns: 'projects' }),
        url: 'http://d97714j6.beget.tech/catalog/anil-5526/',
      },
      features: t('projects.gritella.more.productPage.features', {
        returnObjects: true,
        ns: 'projects',
      }),
    },
    {
      name: t('projects.gritella.more.userPage.name', { ns: 'projects' }),
      link: {
        title: t('projects.visit', { ns: 'projects' }),
        url: 'http://d97714j6.beget.tech/profile/',
      },
      features: t('projects.gritella.more.userPage.features', {
        returnObjects: true,
        ns: 'projects',
      }),
    },
    {
      name: t('projects.gritella.more.order.name', { ns: 'projects' }),
      link: {
        title: t('projects.visit', { ns: 'projects' }),
        url: 'http://d97714j6.beget.tech/order/',
      },
      features: t('projects.gritella.more.order.features', {
        returnObjects: true,
        ns: 'projects',
      }),
    },
    {
      name: t('projects.gritella.more.gift.name', { ns: 'projects' }),
      link: {
        title: t('projects.visit', { ns: 'projects' }),
        url: 'http://d97714j6.beget.tech/about-giftcard/',
      },
      features: t('projects.gritella.more.gift.features', {
        returnObjects: true,
        ns: 'projects',
      }),
    },
    {
      name: t('projects.gritella.more.misc.name', { ns: 'projects' }),
      features: t('projects.gritella.more.misc.features', {
        returnObjects: true,
        ns: 'projects',
      }),
      type: t('projects.link', { ns: 'projects' }),
    },
  ];
};

export default function GritellaProject() {
  const { t } = useTranslation();
  return (
    <>
      <Typography variant="h6">{t('projects.features', { ns: 'projects' })}</Typography>
      <CollapsibleTable features={withTranslation(t)} />
    </>
  );
}
