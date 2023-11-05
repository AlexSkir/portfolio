import React, { Suspense, lazy } from 'react';
import { useTranslation } from 'react-i18next';
import LoadingBlock from '../common/LoadingBlock';

const Typography = lazy(() => import('../common/Typography'));
const ResumeCard = lazy(() => import('./ResumeCard'));
const HatIcon = lazy(() => import('./HatGradientIcon'));

export default function Education() {
  const { t } = useTranslation();

  return (
    <div className="resume-section__education-block">
      <div className="resume-section__block-title">
        <Suspense fallback={<LoadingBlock width="30px" height="30px" variant="circular" />}>
          <HatIcon main="var(--secondary-main)" dark="var(--secondary-dark)" />
        </Suspense>
        <Suspense fallback={<LoadingBlock width="150px" height="30px" variant="rectangular" />}>
          <Typography variant="subtitle1" component="h3" classes="resume-section__block-subtitle">
            {t('resume.edu.title')}
          </Typography>
        </Suspense>
      </div>
      <div className="resume-section__block-body">
        <Suspense fallback={<LoadingBlock width="290px" height="90px" variant="rounded" />}>
          <ResumeCard
            date="2019-2020"
            position="HTML, CSS, JavaScript, React"
            place="Codecademy, Codewars"
          />
        </Suspense>
        <Suspense fallback={<LoadingBlock width="290px" height="90px" variant="rounded" />}>
          <ResumeCard
            date="2019"
            position="JavaScript"
            place="The Rolling Scopes School"
            link="https://rs.school/"
            techs={t('resume.edu.schoolTechs', { joinArrays: ' ' })}
            projectUrl="/portfolio"
            CTA={t('resume.edu.cta')}
          />
        </Suspense>
        <Suspense fallback={<LoadingBlock width="290px" height="90px" variant="rounded" />}>
          <ResumeCard
            date="2009"
            position={t('resume.edu.degree')}
            place={t('resume.edu.faculty')}
            link="https://tusur.ru/"
          />
        </Suspense>
      </div>
    </div>
  );
}
