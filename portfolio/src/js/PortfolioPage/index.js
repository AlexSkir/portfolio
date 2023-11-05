import React, { Suspense, lazy } from 'react';
import { useTranslation } from 'react-i18next';
import Drawer from '../Layout/Drawer';
import PageWrapper from '../Layout/PageWrapper';
import projectArr from './projectsArray';
import AvatarPortfolio from '../../assets/avatar/avatar-ok.png';
import LoadingBlock from '../common/LoadingBlock';

const TabPanel = lazy(() => import('./TabPanel'));
const Tabs = lazy(() => import('@mui/material/Tabs'));
const Tab = lazy(() => import('@mui/material/Tab'));
const GalleryItem = lazy(() => import('./Gallery'));
const Typography = lazy(() => import('../common/Typography'));

const tabClasses = 'MyTypography MyTypography-tab-btn tab-btn';
const tabs = ['all', 'landings', 'app', 'cms', 'school'];

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
    value: index,
  };
}

export default function Page() {
  const { t } = useTranslation();
  const [value, setValue] = React.useState('all');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const data = Object.values(projectArr(t));
  // console.log(projectArr(t));

  return (
    <>
      <Drawer avatar={AvatarPortfolio} />
      <PageWrapper title={t('portfolio.title')}>
        <div className="tab-buttons__container">
          <Suspense fallback={<LoadingBlock width="100%" height="50px" />}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="portfolio projects"
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile
            >
              {tabs.map((item, i) => (
                <Tab
                  key={i}
                  label={<Typography variant="subtitle2">{t(`portfolio.tabs.${item}`)}</Typography>}
                  className={`${tabClasses} ${value === item ? ' is_selected' : ''}`}
                  {...a11yProps(item)}
                />
              ))}
            </Tabs>
          </Suspense>
        </div>

        {tabs.map((item, i) => (
          <Suspense key={i} fallback={<LoadingBlock width="100%" height="300px" />}>
            <TabPanel index={item} value={value}>
              <ul className="project-gallery__list">
                {data
                  .filter((project) => project.tabs.includes(item))
                  .map((item, i) => (
                    <li key={i} className="project-gallery__list-item">
                      <Suspense fallback={<LoadingBlock width="100%" height="300" />}>
                        <GalleryItem
                          key={i}
                          path={item.path}
                          image={item.image}
                          name={item.name}
                          type={item.type}
                          tool={item.mainTool}
                        />
                      </Suspense>
                    </li>
                  ))}
              </ul>
            </TabPanel>
          </Suspense>
        ))}
      </PageWrapper>
    </>
  );
}
