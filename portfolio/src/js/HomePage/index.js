import React from 'react';
import { useTranslation } from 'react-i18next';
import Drawer from '../Layout/Drawer/index';
import PageWrapper from '../Layout/PageWrapper';
import Intro from './Intro';
import Activities from './Activities';
import AvatarHi from '../../assets/avatar/avatar-hi.png';

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Drawer avatar={AvatarHi} />
      <PageWrapper title={t('home.title')}>
        <div className="home-page__block">
          <Intro />

          <div className="home-page__body">
            <Activities />
          </div>
        </div>
      </PageWrapper>
    </>
  );
}
