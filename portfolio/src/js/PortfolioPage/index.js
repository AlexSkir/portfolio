import React from 'react';
import SEO from '../common/SEO';
import CustomStyledTabs from './StyledTabs';
import TabPanel from './TabPanel';
import ProjectsListGallery from './Gallery';
import projectArr from './projectsArray';
import PageLayout from '../PageLayout/index';

const tabs = ['all', 'landings', 'app', 'cms', 'rss'];

function Portfolio() {
  const [value, setValue] = React.useState('all');

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <PageLayout title="Portfolio" avatar="ok">
      {/* <SEO title="Aleksandra Skirnevskaia - Portfolio" description={} /> */}
      <CustomStyledTabs value={value} handleChange={handleChange} />
      {tabs.map((item, i) => (
        <TabPanel key={i} index={item} value={value}>
          <ProjectsListGallery
            itemData={Object.values(projectArr).filter((project) => project.tabs.includes(item))}
          />
        </TabPanel>
      ))}
    </PageLayout>
  );
}

export default Portfolio;
