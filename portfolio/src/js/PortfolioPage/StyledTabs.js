import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material/styles';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
    value: index,
  };
}

const styles = ({ theme }) => ({
  '.MuiTabs-scrollButtons': {
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
  '& .MuiTabs-flexContainer': {
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'flex-end',
    },
  },
  '& .MuiTabs-indicator': {
    display: 'none',
  },
  '& .MuiTab-root': {
    padding: '0',
    marginRight: '16px',
    minWidth: '30px',
    height: '24px',
    minHeight: '24px',
    fontFamily: 'Poppins',
    fontSize: '16px',
    fontWeight: '500',
    color: theme.palette.primary.paleText,
    '&.Mui-selected': {
      color: theme.palette.secondary.dark,
    },
  },
});

const StyledTabs = styled(Tabs)(styles);

function CustomStyledTabs(props) {
  const { value, handleChange } = props;
  return (
    <Box>
      <StyledTabs
        value={value}
        onChange={handleChange}
        aria-label="example projects"
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
      >
        <Tab label="All" {...a11yProps('all')} />
        <Tab label="Landings" {...a11yProps('landings')} />
        <Tab label="Apps" {...a11yProps('app')} />
        <Tab label="CMS" {...a11yProps('cms')} />
        <Tab label="School" {...a11yProps('school')} />
      </StyledTabs>
    </Box>
  );
}

CustomStyledTabs.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default CustomStyledTabs;
