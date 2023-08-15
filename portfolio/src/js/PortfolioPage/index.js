import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PageLayout from '../common/PageLayout';
import SEO from '../common/SEO';
import CustomStyledTabs from './StyledTabs';
import TabPanel from './TabPanel';

const projects = {
  'Online Zoo': {
    tabs: ['all', 'landings'],
    technologies: ['HTML/SASS', 'JS/jQuery', 'Adaptive Design', 'Perfect Pixel'],
    description: 'Landing',
    link: 'https://alexskir.github.io/online-zoo/index.html',
    page: '/online-zoo',
    image: '',
  },
};

const Portfolio = ({ location: { pathname } }) => {
  if (pathname !== '/' && pathname !== '/Portfolio') {
    return null;
  }
  const [value, setValue] = React.useState('all');

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <PageLayout title="Portfolio">
      <>
        {/* <SEO title="Aleksandra Skirnevskaia - Portfolio" description={} /> */}
        <CustomStyledTabs value={value} handleChange={handleChange} />
        <TabPanel value={value} index="all">
          All items
        </TabPanel>
        <TabPanel value={value} index="landings">
          Item One
        </TabPanel>
        <TabPanel value={value} index="js">
          Item Two
        </TabPanel>
        <TabPanel value={value} index="react">
          Item Three
        </TabPanel>
        <TabPanel value={value} index="cms">
          Item Three
        </TabPanel>
        <TabPanel value={value} index="rss">
          Item Three
        </TabPanel>
      </>
    </PageLayout>
  );
};

Portfolio.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Portfolio;
