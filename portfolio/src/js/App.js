import { hot } from 'react-hot-loader';
import React, { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import SEO from './common/SEO';
import AppRouter from './routes';
import Loading from './common/Loading';

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <HelmetProvider>
        <SEO />
        <AppRouter />
      </HelmetProvider>
    </Suspense>
  );
};

export default hot(module)(App);
