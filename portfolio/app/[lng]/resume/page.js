import React, { Suspense, lazy } from 'react';
// import Link from '@mui/material/Link';
import Link from 'next/link';
import { useTranslation } from '../../i18n';
// import LoadingPage from './components/loading';
import PageLayout from '../components/PageLayout';
import enSeo from '../../i18n/locales/en/seo.json';
import ruSeo from '../../i18n/locales/ru/seo.json';

// const PageLayout = lazy(() => import('./components/PageLayout'));
export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const { lng } = params;

  // fetch data
  // const product = await fetch(`https://.../${id}`).then((res) => res.json())

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []
  const seo = lng === 'en' ? enSeo.common : ruSeo.common;
  const prevDescr = (await parent).description || '';
  return {
    title: `${seo.title} | Resume`,
    description: `check resume! ${prevDescr}`,
    /* openGraph: {
      images: ['/some-specific-page-image.jpg', ...previousImages],
    }, */
  };
}

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng, 'resume');
  return (
    <PageLayout avatar="base" title={t('title')} lng={lng}>
      <h1>{t('subtitle')}</h1>
      <Link href={`/${lng}`}>back</Link>
      <br />
      <Link href={`/${lng}/portfolio`}>portfolio</Link>
    </PageLayout>
  );
}

{
  /* <PageLayout avatar="hi" title={t('title')} lng={lng}> */
}
