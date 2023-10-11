'use client';

import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import CollapsibleTable from './CollapsibleTable';
import LoadingBlock from '../../components/common/LoadingBlock';

const Typography = lazy(() => import('../../components/Typography'));

/* t('projects.chat.description', { joinArrays: ' ', ns: 'projects' }) */
/* const withTranslation = (t) => {
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
}; */

export default function GritellaProject(props) {
  const { more, t } = props;
  console.log('gritella more: ', more);

  return (
    <>
      <Suspense fallback={<LoadingBlock width="200px" height="30px" />}>
        <Typography variant="h6">{t.features}</Typography>
      </Suspense>

      <Suspense fallback={<LoadingBlock width="100%" height="66px" />}>
        <CollapsibleTable features={more} t={t} />
      </Suspense>
      {/* <Typography variant="h6">{t('projects.features', { ns: 'projects' })}</Typography>
      <CollapsibleTable features={withTranslation(t)} /> */}
    </>
  );
}

GritellaProject.propTypes = {
  more: PropTypes.array.isRequired,
  t: PropTypes.object.isRequired,
};
