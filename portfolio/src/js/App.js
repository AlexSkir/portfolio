import { hot } from 'react-hot-loader';
import React, { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import SEO from './common/SEO';
import AppRouter from './routes';
import Loading from './common/Loading';
import Avatar from '../assets/images/avatar/avatar-thumb-up.png';

const helmetContext = {};

const App = () => {
  const { t } = useTranslation();
  return (
    <HelmetProvider context={helmetContext}>
      <Suspense fallback={<Loading />}>
        <SEO
          image={Avatar}
          title={t('common.seo.title')}
          description={t('common.seo.description', { joinArrays: ' ' })}
        />
        <AppRouter />
      </Suspense>
    </HelmetProvider>
  );
};

export default hot(module)(App);
