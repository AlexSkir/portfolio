import React, { lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import CustomStyledTabs from './StyledTabs';
import TabPanel from './TabPanel';
import ProjectsListGallery from './Gallery';
import projectArr from './projectsArray';

import ErrorBoundary from '../common/ErrorBoundary';
import collage from '../../assets/images/portfolio.png';
import LoadingLayout from '../Suspense/LoadingMainlayout';

const PageLayout = lazy(() => import('../PageLayout'));

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
    <Suspense fallback={<LoadingLayout />}>
      <PageLayout title={t('portfolio.title')} avatar="ok">
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
    </Suspense>
  );
}

export default Portfolio;
