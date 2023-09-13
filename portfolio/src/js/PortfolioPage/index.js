import React from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import SEO from '../common/SEO';
import CustomStyledTabs from './StyledTabs';
import TabPanel from './TabPanel';
import ProjectsListGallery from './Gallery';
import projectArr from './projectsArray';
import PageLayout from '../PageLayout/index';
import ShareBar from '../MainLayout/Share';

import ErrorBoundary from '../common/ErrorBoundary';
import collage from '../../assets/images/portfolio.png';

const tabs = ['all', 'landings', 'app', 'cms', 'school'];

function Portfolio() {
  const { t } = useTranslation();
  const [value, setValue] = React.useState('all');

  const ErrorMsg = (error) => {
    return (
      <div>
        {/* Вы можете использовать свои стили и код для обработки ошибок */}
        <p>Something went wrong! Reload the page.</p>
        <p>{error.message}</p>
      </div>
    );
  };

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
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          button: { m: 0, backgroundColor: 'primary.paper' },
        }}
      >
        <ShareBar
          url={window.location.href}
          len={0}
          title={t('portfolio.seo.title', { joinArrays: ' ' })}
          summary={t('common.seo.description', { joinArrays: ' ' })}
          image={collage}
        />
      </Box>
      <CustomStyledTabs value={value} handleChange={handleChange} />
      {tabs.map((item, i) => (
        <TabPanel key={i} index={item} value={value}>
          <ErrorBoundary ErrorComponent={ErrorMsg}>
            <ProjectsListGallery
              itemData={Object.values(projectArr(t)).filter((project) =>
                project.tabs.includes(item),
              )}
            />
          </ErrorBoundary>
        </TabPanel>
      ))}
    </PageLayout>
  );
}

export default Portfolio;
