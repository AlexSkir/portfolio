import React, { Suspense, lazy } from 'react';
import { useTranslation } from 'react-i18next';
import LoadingBlock from '../common/LoadingBlock';
import Content from '../Layout/Content';
import AvatarResume from '../../assets/avatar/avatar-base.png';

const Typography = lazy(() => import('../common/Typography'));
const ResumeDownload = lazy(() => import('../common/ResumeDownload'));
const ResumeCard = lazy(() => import('./ResumeCard'));
const HatIcon = lazy(() => import('./HatGradientIcon'));
const BagIcon = lazy(() => import('./BagGradientIcon'));

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

export default function Resume() {
  const { t } = useTranslation();

  return (
    <Content avatar={AvatarResume} title={t('resume.title')}>
      <div className="resume-section__info-block">
        <div className="resume-section__education-block">
          <div className="resume-section__block-title">
            <Suspense fallback={<LoadingBlock width="30px" height="30px" variant="circular" />}>
              <HatIcon main="var(--secondary-main)" dark="var(--secondary-dark)" />
            </Suspense>
            <Suspense fallback={<LoadingBlock width="150px" height="30px" variant="rectangular" />}>
              <Typography
                variant="subtitle1"
                component="h3"
                classes="resume-section__block-subtitle"
              >
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
      </div>

      <Suspense fallback={<LoadingBlock width="185px" height="44px" variant="rounded" />}>
        <div className="resume-section__download-block">
          <ResumeDownload />
        </div>
      </Suspense>

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
    </Content>
  );
}
