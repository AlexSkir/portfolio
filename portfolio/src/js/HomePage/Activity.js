import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const svgWrapper = {
  width: '24px',
  height: '24px',
  mr: '10px',
};
const subtitleWrapper = {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
};

function ActivityItem(props) {
  const { icon, title, children, color, ...other } = props;

  const colorBox = {
    width: { xs: '100%', sm: '45%' },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: {
      xs: 'secondary.blueBox',
      sm: color === 'pink' ? 'secondary.pinkBox' : 'secondary.blueBox',
    },
    p: { xs: '10px', md: '25px' },
    borderRadius: '20px',
  };

  return (
    <Box {...other} className="about-section__activity-item" sx={colorBox}>
      <Box sx={subtitleWrapper}>
        <Box sx={svgWrapper}>{icon}</Box>
        <Typography variant="h5" sx={{ wordBreak: 'break-word' }}>
          {title}
        </Typography>
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
};

export default ActivityItem;
