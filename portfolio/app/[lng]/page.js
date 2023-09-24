'use client';

import React, { Suspense, lazy } from 'react';
import Link from '@mui/material/Link';
// import Link from 'next/link';
import { useTranslation } from '../i18n/client';
// import LoadingPage from './components/loading';

const PageLayout = lazy(() => import('./components/PageLayout'));

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
