'use client';

import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import Link from '@mui/material/Link';
// import Link from 'next/link';
import { useTranslation } from '../i18n/client';
// import LoadingPage from './components/loading';
import PageLayout from './components/PageLayout';

// const PageLayout = lazy(() => import('./components/PageLayout'));

export default function Page({ params: { lng } }) {
  const { t } = useTranslation(lng, 'home');
  return (
    <PageLayout avatar="hi" title={t('title')} lng={lng}>
      <h1>{t('subtitle')}</h1>
      <Link href={`/${lng}/resume`}>resume</Link>
      <br />
      <Link href={`/${lng}/portfolio`}>portfolio</Link>
    </PageLayout>
  );
}

/* <PageLayout avatar="hi" title={t('title')} lng={lng}> */
Page.propTypes = {
  params: PropTypes.object.isRequired,
};
