'use client';

import React, { Suspense, lazy } from 'react';
import Link from 'next/link';
import { useTranslation } from '../../i18n/client';
// import LoadingPage from './components/loading';

const PageLayout = lazy(() => import('../components/PageLayout'));

export default async function Page({ params: { lng } }) {
  const { t } = useTranslation(lng);
  return (
    <PageLayout avatar="hi" title="home" t={t}>
      <h1>{t('common.name')}</h1>
      <Link href={`/${lng}/resume`}>resume</Link>
      <br />
      <Link href={`/${lng}/portfolio`}>portfolio</Link>
    </PageLayout>
  );
}
