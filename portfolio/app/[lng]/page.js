import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import getDictionary from '../i18n/dictionaries';
import LoadingBlock from './components/common/LoadingBlock';
import './styles/Home.scss';

const Typography = lazy(() => import('./components/Typography'));
const ResumeDownload = lazy(() => import('./components/common/ResumeDownload'));
const CodeIcon = lazy(() => import('./assets/svg/CodeIcon.svg'));
const AppIcon = lazy(() => import('./assets/svg/App.svg'));
const SeoIcon = lazy(() => import('./assets/svg/SeoIcon.svg'));
const FreelanceIcon = lazy(() => import('./assets/svg/Freelance.svg'));
const ShareBar = lazy(() => import('./components/common/Share'));
const TopLeftSvg = lazy(() => import('./assets/svg/HomeTopLeft.svg'));
const TopRightSvg = lazy(() => import('./assets/svg/HomeTopRight.svg'));
const BotRightSvg = lazy(() => import('./assets/svg/HomeBotRight.svg'));
const TopAboutSvg = lazy(() => import('./assets/svg/HomeTopAbout.svg'));
const BotAboutSvg = lazy(() => import('./assets/svg/HomeBotAbout.svg'));
const MiddleAboutSvg = lazy(() => import('./assets/svg/HomeMiddleAbout.svg'));

export default async function Page({ params: { lng } }) {
  const tHome = await getDictionary(lng, 'home');
  const t = await getDictionary(lng);
  return (
    <div className="home-page">
      <Suspense fallback="">
        <TopLeftSvg className="bg-img home-page__top-left-svg" />
        <TopRightSvg className="bg-img home-page__top-right-svg" />
      </Suspense>

      <div className="home-page__landing">
        <Suspense fallback="">
          <BotRightSvg className="bg-img home-page__bot-right-svg" />
        </Suspense>

        <Suspense fallback={<LoadingBlock width="100%" height="60px" />}>
          <Typography variant="h1" classes="home-page__home-title">
            {tHome.home}
          </Typography>
        </Suspense>

        <div className="page-container__links">
          <Link href={`/${lng}/contact`} className="page-container__link">
            <Typography variant="subtitle1">{tHome.hire}</Typography>
          </Link>

          <Suspense fallback={<LoadingBlock width="133px" height="30px" />}>
            <ResumeDownload classes="page-container__link">
              <Typography variant="subtitle1">{tHome.download}</Typography>
            </ResumeDownload>
          </Suspense>
        </div>
      </div>

      <div className="page-container__content">
        <Suspense fallback="">
          <TopAboutSvg className="bg-img home-page__top-about-svg" />
          <BotAboutSvg className="bg-img home-page__bot-about-svg" />
        </Suspense>
        <div className="page-container__title-block">
          <Suspense fallback={<LoadingBlock width="100%" height="55px" />}>
            <Typography variant="h2" classes="page-container__title">
              {tHome.title}
            </Typography>
          </Suspense>
          <Suspense fallback={<LoadingBlock width="70px" height="70px" />}>
            <ShareBar url="href" len={0} t={t} />
          </Suspense>
        </div>

        <div className="home-page__block">
          <Suspense fallback="">
            <MiddleAboutSvg className="bg-img home-page__middle-about-svg" />
          </Suspense>
          <Suspense fallback={<LoadingBlock width="100%" height="80px" />}>
            <Typography variant="body2">{tHome.intro.join(' ')}</Typography>
          </Suspense>
          <div className="home-page__subtitle-wrapper">
            <Suspense fallback={<LoadingBlock width="300px" height="40px" />}>
              <Typography variant="h3" classes="home-page__top-subtitle">
                {tHome.subtitle}
              </Typography>
            </Suspense>
          </div>

          <div className="home-page__body">
            <div className="home-page__activity-item right-block">
              <Suspense fallback={<LoadingBlock width="100%" height="100px" />}>
                <div className="home-page__subtitle-block">
                  <div className="home-page__icon-wrapper">
                    <CodeIcon className="MySvg-icon home-page__icon activity-icon_dark" />
                  </div>
                  <Typography variant="h5" classes="home-page__subtitle">
                    {tHome.activity1.subtitle}
                  </Typography>
                </div>
                <Typography variant="body2">{tHome.activity1.body.join(' ')}</Typography>
              </Suspense>
            </div>

            <div className="home-page__activity-item left-block">
              <Suspense fallback={<LoadingBlock width="100%" height="100px" />}>
                <div className="home-page__subtitle-block">
                  <div className="home-page__icon-wrapper">
                    <AppIcon className="MySvg-icon home-page__icon activity-icon_main" />
                  </div>
                  <Typography variant="h5" classes="home-page__subtitle">
                    {tHome.activity2.subtitle}
                  </Typography>
                </div>
                <Typography variant="body2">{tHome.activity2.body.join(' ')}</Typography>
              </Suspense>
            </div>

            <div className="home-page__activity-item right-block">
              <Suspense fallback={<LoadingBlock width="100%" height="100px" />}>
                <div className="home-page__subtitle-block">
                  <div className="home-page__icon-wrapper">
                    <FreelanceIcon className="MySvg-icon home-page__icon activity-icon_main" />
                  </div>
                  <Typography variant="h5" classes="home-page__subtitle">
                    {tHome.activity3.subtitle}
                  </Typography>
                </div>
                <Typography variant="body1">{tHome.activity3.body.join(' ')}</Typography>
              </Suspense>
            </div>

            <div className="home-page__activity-item left block">
              <Suspense fallback={<LoadingBlock width="100%" height="100px" />}>
                <div className="home-page__subtitle-block">
                  <div className="home-page__icon-wrapper">
                    <SeoIcon className="MySvg-icon home-page__icon activity-icon_dark" />
                  </div>
                  <Typography variant="h5" classes="home-page__subtitle">
                    {tHome.activity4.subtitle}
                  </Typography>
                </div>
                <Typography variant="body1">{tHome.activity4.body.join(' ')}</Typography>
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Page.propTypes = {
  params: PropTypes.object.isRequired,
};
