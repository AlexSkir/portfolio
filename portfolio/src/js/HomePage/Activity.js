import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const svgWrapper = {
  width: '24px',
  height: '24px',
  mr: '10px',
};
const pinkBox = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  backgroundColor: 'secondary.pinkBox',
  p: '25px',
  mb: '25px',
  width: { xs: '100%', lg: '50%' },
  borderRadius: '20px',
};
const blueBox = {
  ...pinkBox,
  backgroundColor: 'secondary.blueBox',
};
const subtitleWrapper = {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
};

function ActivityItem(props) {
  const { icon, title, children, color, mr, ...other } = props;

  const colorBox = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: color === 'pink' ? 'secondary.pinkBox' : 'secondary.blueBox',
    p: '25px',
    mb: '25px',
    width: { xs: '100%', lg: '50%' },
    borderRadius: '20px',
    mr: mr ? { xs: '0', md: '25px' } : 0,
  };

  return (
    <Box {...other} className="about-section__activity-item" sx={colorBox}>
      <Box sx={subtitleWrapper}>
        <Box sx={svgWrapper}>{icon}</Box>
        <Typography variant="h5">{title}</Typography>
      </Box>
      <Typography variant="body1">{children}</Typography>
    </Box>
  );
}

ActivityItem.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  mr: PropTypes.bool.isRequired,
};

export default ActivityItem;
