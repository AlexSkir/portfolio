import { hot } from 'react-hot-loader';
import React, { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import SEO from './common/SEO';
import AppRouter from './routes';
import Loading from './common/Loading';

const App = () => {
  const { t } = useTranslation();
  return (
    <Suspense fallback={<Loading />}>
      <HelmetProvider>
        <SEO
          title={t('common.seo.title')}
          description={t('common.seo.description', { joinArrays: ' ' })}
        />
        <AppRouter />
      </HelmetProvider>
    </Suspense>
  );
};

export default hot(module)(App);
