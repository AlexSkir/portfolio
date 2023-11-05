import React, { Suspense, lazy } from 'react';
import { useTranslation } from 'react-i18next';
import LoadingBlock from '../common/LoadingBlock';

const Typography = lazy(() => import('../common/Typography'));
const ResumeCard = lazy(() => import('./ResumeCard'));
const BagIcon = lazy(() => import('./BagGradientIcon'));

export default function Experience() {
  const { t } = useTranslation();

  return (
    <div className="resume-section__experience-block">
      <div className="resume-section__block-title">
        <Suspense fallback={<LoadingBlock width="30px" height="30px" variant="circular" />}>
          <BagIcon main="var(--secondary-main)" dark="var(--secondary-dark)" />
        </Suspense>
        <Suspense fallback={<LoadingBlock width="290px" height="33px" variant="rectangular" />}>
          <Typography variant="subtitle1" classes="resume-section__block-subtitle">
            {t('resume.exp.title')}
          </Typography>
        </Suspense>
      </div>
      <div className="resume-section__block-body">
        <Suspense fallback={<LoadingBlock width="290px" height="90px" variant="rounded" />}>
          <ResumeCard
            date={t('resume.exp.unit1.date')}
            position={t('resume.exp.unit1.position')}
            place=""
            techs={t('resume.exp.unit1.techs')}
            projectUrl="/portfolio"
            CTA={t('resume.exp.unit1.cta')}
          />
        </Suspense>
        <Suspense fallback={<LoadingBlock width="290px" height="90px" variant="rounded" />}>
          <ResumeCard
            date="2020-2021"
            position={t('resume.exp.unit2.position')}
            place="Gritella lingereie"
            link="http://d97714j6.beget.tech/"
            techs="WordPress & WooCommerce, JS, PHP, SEO, Google API"
            projectUrl="/portfolio/gritella"
            CTA={t('resume.exp.unit2.cta')}
          />
        </Suspense>
        <Suspense fallback={<LoadingBlock width="290px" height="90px" variant="rounded" />}>
          <ResumeCard
            date="2019"
            position={t('resume.exp.unit3.position')}
            place="GoFuckBiz.com"
            link="https://www.gofuckbiz.com/"
            techs={t('resume.exp.unit3.techs')}
            projectUrl="/portfolio/gofuck"
            CTA={t('resume.exp.unit3.cta')}
          />
        </Suspense>
      </div>
    </div>
  );
}
