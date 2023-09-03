import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function ResumeItem(props) {
  const { date, position, place, color, link } = props;

  return (
    <Box
      className="resume-section__resume-item"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
        maxWidth: '290px',
        minHeight: '90px',
        p: '10px',
        mb: '25px',
        borderRadius: '8px',
        backgroundColor: color === 'pink' ? 'secondary.pinkBox' : 'secondary.blueBox',
      }}
    >
      <Typography variant="body1" sx={{ opacity: '0.9' }}>
        {date}
      </Typography>
      <Typography variant="body3">{position}</Typography>
      {link ? (
        <Link
          className="resume-section__link"
          href={link}
          target="_blank"
          sx={{ color: 'primary.contrastText' }}
        >
          <Typography variant="body1">{place}</Typography>
        </Link>
      ) : (
        <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
          {place}
        </Typography>
      )}
    </Box>
  );
}

ResumeItem.propTypes = {
  date: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  link: PropTypes.string,
};

ResumeItem.defaultProps = {
  link: '',
};

export default ResumeItem;
