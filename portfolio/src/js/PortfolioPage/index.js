import React from 'react';
import PropTypes from 'prop-types';
import SEO from '../common/SEO';
import CustomStyledTabs from './StyledTabs';
import TabPanel from './TabPanel';
import ProjectsListGallery from './Gallery';
import projectArr from './projectsArray';

const tabs = ['all', 'landings', 'app', 'cms', 'rss'];

function Portfolio(props) {
  const { pathname } = props;
  if (pathname !== '/' && pathname !== '/Portfolio') {
    return null;
  }
  const [value, setValue] = React.useState('all');

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <>
      {/* <SEO title="Aleksandra Skirnevskaia - Portfolio" description={} /> */}
      <CustomStyledTabs value={value} handleChange={handleChange} />
      {tabs.map((item, i) => (
        <TabPanel key={i} index={item} value={value}>
          <ProjectsListGallery
            itemData={Object.values(projectArr).filter((project) => project.tabs.includes(item))}
          />
        </TabPanel>
      ))}
    </>
  );
}

Portfolio.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default Portfolio;
