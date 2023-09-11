import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../common/SEO';
import CustomStyledTabs from './StyledTabs';
import TabPanel from './TabPanel';
import ProjectsListGallery from './Gallery';
import projectArr from './projectsArray';
import PageLayout from '../PageLayout/index';

import collage from '../../assets/images/projects/portfolio.png';

const tabs = ['all', 'landings', 'app', 'cms', 'school'];

function Portfolio() {
  const { t } = useTranslation();
  const [value, setValue] = React.useState('all');

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <PageLayout title={t('portfolio.title')} avatar="ok">
      <SEO
        title={t('portfolio.seo.title', { joinArrays: ' ' })}
        image={collage}
        description={t('common.seo.description', { joinArrays: ' ' })}
      />
      <CustomStyledTabs value={value} handleChange={handleChange} />
      {tabs.map((item, i) => (
        <TabPanel key={i} index={item} value={value}>
          <ProjectsListGallery
            itemData={Object.values(projectArr(t)).filter((project) => project.tabs.includes(item))}
          />
        </TabPanel>
      ))}
    </PageLayout>
  );
}

export default Portfolio;
