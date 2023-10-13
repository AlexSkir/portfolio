import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import LoadingBlock from '../components/common/LoadingBlock';

const Typography = lazy(() => import('../components/Typography'));

function ResumeCard(props) {
  const {
    date,
    position,
    place,
    link = false,
    techs = false,
    projectUrl = false,
    CTA = false,
    ...others
  } = props;
  return (
    <div className="resume-section__resume-item" {...others}>
      <div className="resume-section__item-content">
        <Suspense fallback={<LoadingBlock width="50%" height="20px" />}>
          <Typography variant="body1" classes="resume-section__item-date">
            {date}
          </Typography>
        </Suspense>

        <Suspense fallback={<LoadingBlock width="100%" height="20px" margin="5px 0" />}>
          <Typography variant="body3">{position}</Typography>
        </Suspense>

        {link ? (
          <Suspense fallback={<LoadingBlock width="100%" height="20px" />}>
            <a className="resume-section__item-link" href={link} target="_blank" rel="noreferrer">
              <Typography variant="body1">{place}</Typography>
            </a>
          </Suspense>
        ) : (
          <Suspense fallback={<LoadingBlock width="100%" height="20px" />}>
            <Typography variant="body1">{place}</Typography>
          </Suspense>
        )}
        {techs ? (
          <Suspense fallback={<LoadingBlock width="100%" height="20px" margin="5px 0" />}>
            <Typography classes="resume-section__item-techs" variant="body1">
              {techs}
            </Typography>
          </Suspense>
        ) : (
          <></>
        )}
      </div>

      {CTA ? (
        <div className="resume-section__item-cta">
          <Suspense fallback={<LoadingBlock width="50%" height="20px" />}>
            <Link href={projectUrl} target="_blank" className="resume-section__item-cta-link">
              <Typography variant="subtitle2">{CTA}</Typography>
            </Link>
          </Suspense>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

ResumeCard.propTypes = {
  date: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  projectUrl: PropTypes.string,
  techs: PropTypes.string,
  link: PropTypes.string,
  CTA: PropTypes.string,
};

export default ResumeCard;
