import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import LoadingBlock from '../components/common/LoadingBlock';

import '../styles/Resume.scss';

const Typography = lazy(() => import('../components/Typography'));
const ResumeDownload = lazy(() => import('../components/common/ResumeDownload'));
const ResumeCard = lazy(() => import('./ResumeCard'));
const HatIcon = lazy(() => import('./HatGradientIcon'));
const BagIcon = lazy(() => import('./BagGradientIcon'));

export default function Resume(props) {
  const { t, lng } = props;

  const workSkills = [
    <Link
      href={`/${lng}/portfolio/youtube`}
      target="_blank"
      className="resume-section__skills-link"
    >
      <Typography variant="body2" component="span">
        JavaScript
      </Typography>
    </Link>,
    <Link
      href={`/${lng}/portfolio/culture-portal`}
      target="_blank"
      className="resume-section__skills-link"
    >
      React.js
    </Link>,
    'jQuery',
    'HTML',
    'CSS',
    <Link href={`/${lng}/portfolio/zoo`} target="_blank" className="resume-section__skills-link">
      SCSS
    </Link>,
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
    <Link
      href={`/${lng}/portfolio/gritella`}
      target="_blank"
      className="resume-section__skills-link"
    >
      PHP
    </Link>,
    <Link
      href={`/${lng}/portfolio/yandex-go-cms`}
      target="_blank"
      className="resume-section__skills-link"
    >
      Editor X
    </Link>,
    'MySQL',
    'Docker',
  ];

  return (
    <>
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
                {t.edu.title}
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
                techs={t.edu.schoolTechs.join(' ')}
                projectUrl={`/${lng}/portfolio`}
                CTA={t.edu.cta}
              />
            </Suspense>
            <Suspense fallback={<LoadingBlock width="290px" height="90px" variant="rounded" />}>
              <ResumeCard
                date="2009"
                position={t.edu.degree}
                place={t.edu.faculty}
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
                {t.exp.title}
              </Typography>
            </Suspense>
          </div>
          <div className="resume-section__block-body">
            <Suspense fallback={<LoadingBlock width="290px" height="90px" variant="rounded" />}>
              <ResumeCard
                date={t.exp.unit1.date}
                position={t.exp.unit1.position}
                place=""
                techs={t.exp.unit1.techs}
                projectUrl={`/${lng}/portfolio`}
                CTA={t.exp.unit1.cta}
              />
            </Suspense>
            <Suspense fallback={<LoadingBlock width="290px" height="90px" variant="rounded" />}>
              <ResumeCard
                date="2020-2021"
                position={t.exp.unit2.position}
                place="Gritella lingereie"
                link="http://d97714j6.beget.tech/"
                techs="WordPress & WooCommerce, JS, PHP, SEO, Google API"
                projectUrl={`/${lng}/portfolio/gritella`}
                CTA={t.exp.unit2.cta}
              />
            </Suspense>
            <Suspense fallback={<LoadingBlock width="290px" height="90px" variant="rounded" />}>
              <ResumeCard
                date="2019"
                position={t.exp.unit3.position}
                place="GoFuckBiz.com"
                link="https://www.gofuckbiz.com/"
                techs={t.exp.unit3.techs}
                projectUrl={`/${lng}/portfolio/gofuck`}
                CTA={t.exp.unit3.cta}
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
              {t.skills.work.title}
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
              {t.skills.soft.title}
            </Typography>
            <div className="resume-section__skills-wrapper">
              {t.skills.soft.body.map((item, i) => (
                <div key={i} className="resume-section__skills-item">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Suspense>
      </div>
    </>
  );
}

Resume.propTypes = {
  t: PropTypes.object.isRequired,
  lng: PropTypes.string.isRequired,
};
