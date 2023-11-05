import React, { Suspense, lazy } from 'react';
import { useTranslation } from 'react-i18next';
import LoadingBlock from '../common/LoadingBlock';

const Typography = lazy(() => import('../common/Typography'));
const CodeIcon = lazy(() => import('../../assets/svg/CodeIcon.svg'));
const AppIcon = lazy(() => import('../../assets/svg/App.svg'));
const SeoIcon = lazy(() => import('../../assets/svg/SeoIcon.svg'));
const FreelanceIcon = lazy(() => import('../../assets/svg/Freelance.svg'));

export default function Activities() {
  const { t } = useTranslation();

  return (
    <>
      <div className="home-page__activity-item-wrapper">
        <div className="home-page__activity-item is_pink">
          <Suspense fallback={<LoadingBlock width="100%" height="100px" />}>
            <div className="home-page__subtitle-block">
              <div className="home-page__icon-wrapper">
                <CodeIcon className="MySvg-icon home-page__icon activity-icon_dark" />
              </div>
              <Typography variant="h5" classes="home-page__subtitle">
                {t('home.activity1.subtitle')}
              </Typography>
            </div>
            <Typography variant="body1">{t('home.activity1.body', { joinArrays: ' ' })}</Typography>
          </Suspense>
        </div>

        <div className="home-page__activity-item">
          <Suspense fallback={<LoadingBlock width="100%" height="100px" />}>
            <div className="home-page__subtitle-block">
              <div className="home-page__icon-wrapper">
                <AppIcon className="MySvg-icon home-page__icon activity-icon_main" />
              </div>
              <Typography variant="h5" classes="home-page__subtitle">
                {t('home.activity2.subtitle')}
              </Typography>
            </div>
            <Typography variant="body1">{t('home.activity2.body', { joinArrays: ' ' })}</Typography>
          </Suspense>
        </div>
      </div>

      <div className="home-page__activity-item-wrapper is_reverse">
        <div className="home-page__activity-item">
          <Suspense fallback={<LoadingBlock width="100%" height="100px" />}>
            <div className="home-page__subtitle-block">
              <div className="home-page__icon-wrapper">
                <FreelanceIcon className="MySvg-icon home-page__icon activity-icon_main" />
              </div>
              <Typography variant="h5" classes="home-page__subtitle">
                {t('home.activity3.subtitle')}
              </Typography>
            </div>
            <Typography variant="body1">{t('home.activity3.body', { joinArrays: ' ' })}</Typography>
          </Suspense>
        </div>

        <div className="home-page__activity-item is_pink">
          <Suspense fallback={<LoadingBlock width="100%" height="100px" />}>
            <div className="home-page__subtitle-block">
              <div className="home-page__icon-wrapper">
                <SeoIcon className="MySvg-icon home-page__icon activity-icon_dark" />
              </div>
              <Typography variant="h5" classes="home-page__subtitle">
                {t('home.activity4.subtitle')}
              </Typography>
            </div>
            <Typography variant="body1">{t('home.activity4.body', { joinArrays: ' ' })}</Typography>
          </Suspense>
        </div>
      </div>
    </>
  );
}
