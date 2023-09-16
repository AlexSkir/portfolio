import { hot } from 'react-hot-loader';
import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from './common/SEO';
import AppRouter from './routes';
import Avatar from '../assets/images/avatar/avatar-thumb-up.png';
import ThemeWrapper from './common/ThemeWrapper';

const App = () => {
  const { t } = useTranslation();
  return (
    <ThemeWrapper>
      <SEO
        image={Avatar}
        title={t('common.seo.title')}
        description={t('common.seo.description', { joinArrays: ' ' })}
        path="/"
      />
      <AppRouter />
    </ThemeWrapper>
  );
};

export default hot(module)(App);
