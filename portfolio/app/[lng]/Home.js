'use client';

import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
// import Typography from './components/Typography';
import LoadingBlock from './components/common/LoadingBlock';
import CodeIcon from './assets/svg/CodeIcon.svg';
import AppIcon from './assets/svg/App.svg';
import SeoIcon from './assets/svg/SeoIcon.svg';
import FreelanceIcon from './assets/svg/Freelance.svg';

import './styles/Home.scss';

const Typography = lazy(() => import('./components/Typography'));

export default function Home(props) {
  const { t } = props;

  return (
    <div className="home-page__block">
      <Typography variant="body2">{t.intro.join(' ')}</Typography>
      <Typography variant="h3" classes="home-page__top-subtitle">
        {t.subtitle}
      </Typography>

      <div className="home-page__body">
        <Suspense fallback={<LoadingBlock width="100%" height="100px" variant="rounded" />}>
          <div className="home-page__activity-item is_pink">
            <div className="home-page__subtitle-block">
              <div className="home-page__icon-wrapper">
                <CodeIcon className="MySvg-icon home-page__icon activity-icon_dark" />
              </div>
              <Typography variant="h5" classes="home-page__subtitle">
                {t.activity1.subtitle}
              </Typography>
            </div>
            <Typography variant="body1">{t.activity1.body.join(' ')}</Typography>
          </div>

          <div className="home-page__activity-item">
            <div className="home-page__subtitle-block">
              <div className="home-page__icon-wrapper">
                <AppIcon className="MySvg-icon home-page__icon activity-icon_main" />
              </div>
              <Typography variant="h5" classes="home-page__subtitle">
                {t.activity2.subtitle}
              </Typography>
            </div>
            <Typography variant="body1">{t.activity2.body.join(' ')}</Typography>
          </div>

          <div className="home-page__activity-item">
            <div className="home-page__subtitle-block">
              <div className="home-page__icon-wrapper">
                <FreelanceIcon className="MySvg-icon home-page__icon activity-icon_main" />
              </div>
              <Typography variant="h5" classes="home-page__subtitle">
                {t.activity3.subtitle}
              </Typography>
            </div>
            <Typography variant="body1">{t.activity3.body.join(' ')}</Typography>
          </div>

          <div className="home-page__activity-item is_pink">
            <div className="home-page__subtitle-block">
              <div className="home-page__icon-wrapper">
                <SeoIcon className="MySvg-icon home-page__icon activity-icon_dark" />
              </div>
              <Typography variant="h5" classes="home-page__subtitle">
                {t.activity4.subtitle}
              </Typography>
            </div>
            <Typography variant="body1">{t.activity4.body.join(' ')}</Typography>
          </div>
        </Suspense>
      </div>
    </div>
  );
}

Home.propTypes = {
  t: PropTypes.object.isRequired,
};
