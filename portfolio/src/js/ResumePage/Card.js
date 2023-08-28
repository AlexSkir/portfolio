import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function CardItem(props) {
  const { date, position, place, color, link, techs, projectUrl, CTA } = props;
  return (
    <Card
      className="resume-section__resume-item border-radius-8"
      sx={{
        width: '100%',
        maxWidth: '290px',
        minHeight: '90px',
        p: '10px',
        mb: '25px',
        backgroundColor: color === 'pink' ? 'secondary.pinkBox' : 'secondary.blueBox',
      }}
      elevation={0}
    >
      <CardContent sx={{ m: 0, p: 0 }}>
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
          <Typography variant="body1">{place}</Typography>
        )}

        <Typography variant="body1" sx={{ mt: '10px', fontStyle: 'italic' }}>
          {techs}
        </Typography>
      </CardContent>

      <CardActions sx={{ mt: '10px', p: 0 }}>
        <Link
          href={projectUrl}
          target="_blank"
          sx={{ color: 'secondary.dark', textTransform: 'uppercase', cursor: 'pointer' }}
        >
          <Typography variant="subtitle2">{CTA}</Typography>
        </Link>
      </CardActions>
    </Card>
  );
}

CardItem.propTypes = {
  date: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  projectUrl: PropTypes.string.isRequired,
  techs: PropTypes.string.isRequired,
  link: PropTypes.string,
  CTA: PropTypes.string,
};

CardItem.defaultProps = {
  link: '',
  CTA: 'Open project',
};

export default CardItem;
