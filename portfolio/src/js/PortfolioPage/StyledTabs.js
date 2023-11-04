import React, { lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material/styles';
import LoadingBlock from '../common/LoadingBlock';

const Tabs = lazy(() => import('@mui/material/Tabs'));

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
    fontFamily: 'Poppins, Roboto',
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
  const { t } = useTranslation();
  const { value, handleChange } = props;
  return (
    <Box>
      <Suspense fallback={<LoadingBlock width="100%" height="50px" variant="rectangular" />}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="example projects"
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
        >
          <Tab label={t('portfolio.tabs.all')} {...a11yProps('all')} />
          <Tab label={t('portfolio.tabs.landings')} {...a11yProps('landings')} />
          <Tab label={t('portfolio.tabs.app')} {...a11yProps('app')} />
          <Tab label={t('portfolio.tabs.cms')} {...a11yProps('cms')} />
          <Tab label={t('portfolio.tabs.school')} {...a11yProps('school')} />
        </StyledTabs>
      </Suspense>
    </Box>
  );
}

CustomStyledTabs.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default CustomStyledTabs;
