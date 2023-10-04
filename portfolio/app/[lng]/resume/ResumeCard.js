import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Typography from '../components/Typography';

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
        <Typography variant="body1" classes="resume-section__item-date">
          {date}
        </Typography>
        <Typography variant="body3">{position}</Typography>
        {link ? (
          <a className="resume-section__item-link" href={link} target="_blank" rel="noreferrer">
            <Typography variant="body1">{place}</Typography>
          </a>
        ) : (
          <Typography variant="body1">{place}</Typography>
        )}
        {techs ? (
          <Typography classes="resume-section__item-techs" variant="body1">
            {techs}
          </Typography>
        ) : (
          <></>
        )}
      </div>

      {CTA ? (
        <div className="resume-section__item-cta">
          <Link href={projectUrl} target="_blank" className="resume-section__item-cta-link">
            <Typography variant="subtitle2">{CTA}</Typography>
          </Link>
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
