import React, { Suspense, lazy } from 'react';
import { useTranslation } from 'react-i18next';
import LoadingBlock from '../common/LoadingBlock';

const Typography = lazy(() => import('../common/Typography'));

const workSkills = [
  <a href="/portfolio/youtube" target="_blank" className="resume-section__skills-link">
    JavaScript
  </a>,
  <a href="/portfolio/culture-portal" target="_blank" className="resume-section__skills-link">
    React.js
  </a>,
  'jQuery',
  'HTML',
  'CSS',
  <a href="/portfolio/zoo" target="_blank" className="resume-section__skills-link">
    SCSS
  </a>,
  'MUI',
  'Bootstrap',
  <a
    href="https://www.npmjs.com/package/alexskir-reactplate"
    className="resume-section__skills-link"
    target="_blank"
    rel="noreferrer"
  >
    Webpack
  </a>,
  'Babel',
  'Figma',
  'Photoshop',
  'GIT',
  <a href="/portfolio/gritella" target="_blank" className="resume-section__skills-link">
    PHP
  </a>,
  <a href="/portfolio/yandex-go-cms" target="_blank" className="resume-section__skills-link">
    Editor X
  </a>,
  'MySQL',
  'Docker',
];

export default function Skills() {
  const { t } = useTranslation();

  return (
    <div className="resume-section__skills-block">
      <Suspense fallback={<LoadingBlock width="290px" height="300px" variant="rounded" />}>
        <div className="resume-section__work-skills">
          <Typography classes="resume-section__skills-subtitle" variant="subtitle1">
            {t('resume.skills.work.title')}
          </Typography>
          <div className="resume-section__skills-wrapper">
            {workSkills.map((item, i) => (
              <div key={i} className="resume-section__skills-item">
                {item}
              </div>
            ))}
          </div>
        </div>
      </Suspense>

      <Suspense fallback={<LoadingBlock width="290px" height="300px" variant="rounded" />}>
        <div className="resume-section__soft-skills">
          <Typography classes="resume-section__skills-subtitle" variant="subtitle1">
            {t('resume.skills.soft.title')}
          </Typography>
          <div className="resume-section__skills-wrapper">
            {t('resume.skills.soft.body', { returnObjects: true }).map((item, i) => (
              <div key={i} className="resume-section__skills-item">
                {item}
              </div>
            ))}
          </div>
        </div>
      </Suspense>
    </div>
  );
}
