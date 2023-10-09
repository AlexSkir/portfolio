'use client';

import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { poppins } from '../components/Typography';
import LoadingBlock from '../components/common/LoadingBlock';
import projectArr from './projectsArray';
import '../styles/Portfolio.scss';

const TabPanel = lazy(() => import('./TabPanel'));
const Tabs = lazy(() => import('@mui/material/Tabs'));
const Tab = lazy(() => import('@mui/material/Tab'));
const GalleryItem = lazy(() => import('./Gallery'));

const tabs = ['all', 'landings', 'app', 'cms', 'school'];

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
    value: index,
  };
}

export default function Portfolio(props) {
  const { t, lng } = props;
  const [value, setValue] = React.useState('all');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
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
                label={t.tabs[item]}
                className={`MyTypography MyTypography-tab-btn tab-btn ${poppins.variable}
              ${value === item ? ' is_selected' : ''}`}
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
              {Object.values(projectArr(t))
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
                        lng={lng}
                      />
                    </Suspense>
                  </li>
                ))}
            </ul>
          </TabPanel>
        </Suspense>
      ))}
    </>
  );
}

Portfolio.propTypes = {
  t: PropTypes.object.isRequired,
  lng: PropTypes.string.isRequired,
};
