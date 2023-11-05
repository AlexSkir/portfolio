import React, { Suspense, lazy } from 'react';
import { useTranslation } from 'react-i18next';
import LoadingBlock from '../common/LoadingBlock';
import PageWrapper from '../Layout/PageWrapper';
import Skills from './Skills';
import Experience from './Exp';
import Education from './Education';

const ResumeDownload = lazy(() => import('../common/ResumeDownload'));

export default function Resume() {
  const { t } = useTranslation();

  return (
    <>
      <PageWrapper title={t('resume.title')}>
        <div className="resume-section__info-block">
          <Education />

          <Experience />
        </div>

        <Suspense fallback={<LoadingBlock width="185px" height="44px" variant="rounded" />}>
          <div className="resume-section__download-block">
            <ResumeDownload />
          </div>
        </Suspense>

        <Skills />
      </PageWrapper>
    </>
  );
}
