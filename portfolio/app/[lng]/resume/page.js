'use client';

import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
// import Link from '@mui/material/Link';
import Link from 'next/link';
import { useTranslation } from '../../i18n/client';
// import LoadingPage from './components/loading';
import PageLayout from '../components/PageLayout';
import enSeo from '../../i18n/locales/en/seo.json';
import ruSeo from '../../i18n/locales/ru/seo.json';

export default function Page({ params: { lng } }) {
  const { t } = useTranslation(lng, 'resume');
  return (
    <PageLayout avatar="base" title={t('title')} lng={lng}>
      <h1>{t('subtitle')}</h1>
      <Link href={`/${lng}`}>back</Link>
      <br />
      <Link href={`/${lng}/portfolio`}>portfolio</Link>
    </PageLayout>
  );
}

/* <PageLayout avatar="base" title={t('title')} lng={lng}> */
Page.propTypes = {
  params: PropTypes.object.isRequired,
};
