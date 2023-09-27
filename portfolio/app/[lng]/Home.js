'use client';

import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import Link from '@mui/material/Link';
// import Link from 'next/link';
import { useTranslation } from '../i18n';
// import LoadingPage from './components/loading';
// import PageLayout from './components/PageLayout';

const PageLayout = lazy(() => import('./components/PageLayout'));

export default function Home(props) {
  const { lng, t } = props;
  return (
    <PageLayout avatar="hi" title={t('title')} lng={lng}>
      <h1>{t('subtitle')}</h1>
      <Link href={`/${lng}/resume`}>resume</Link>
      <br />
      <Link href={`/${lng}/portfolio`}>portfolio</Link>
    </PageLayout>
  );
}

Home.propTypes = {
  lng: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
};
