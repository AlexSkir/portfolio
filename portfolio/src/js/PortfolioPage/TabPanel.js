import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const tabWrapper = {
  width: '100%',
  height: '100%',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: { xs: 'center', lg: 'space-between' },
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      sx={{ display: value !== index ? 'none' : 'flex' }}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </Box>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

TabPanel.defaultProps = {
  children: <Typography>No projects</Typography>,
};

export default TabPanel;
