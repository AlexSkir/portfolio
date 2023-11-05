import React from 'react';
import { useTranslation } from 'react-i18next';
import PageWrapper from '../Layout/PageWrapper';
import Intro from './Intro';
import Activities from './Activities';

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
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
