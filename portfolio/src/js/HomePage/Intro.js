import React, { Suspense, lazy } from 'react';
import { useTranslation } from 'react-i18next';
import LoadingBlock from '../common/LoadingBlock';

const Typography = lazy(() => import('../common/Typography'));

export default function Intro() {
  const { t } = useTranslation();

  return (
    <>
      <Suspense fallback={<LoadingBlock width="100%" height="80px" />}>
        <Typography variant="body2">{t('home.intro', { joinArrays: ' ' })}</Typography>
      </Suspense>
      <div className="home-page__subtitle-wrapper">
        <Suspense fallback={<LoadingBlock width="300px" height="40px" />}>
          <Typography variant="h3" classes="home-page__top-subtitle">
            {t('home.subtitle')}
          </Typography>
        </Suspense>
      </div>
    </>
  );
}
