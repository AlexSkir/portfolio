import React, { lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';

import CodeIcon from '../../assets/images/svg/code.svg';
import App from '../../assets/images/svg/App.svg';
import Seo from '../../assets/images/svg/seo.svg';
import LoadingLayout from '../Suspense/LoadingMainlayout';

import ActivityItem from './Activity';

const PageLayout = lazy(() => import('../PageLayout'));

const rowWrapper = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '25px',
  justifyContent: 'flex-start',
};

function Home() {
  const { t } = useTranslation();
  const elementRef = React.useRef();
  const [width, setWidth] = React.useState(600);

  React.useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const observer = new ResizeObserver((entries) => {
      // Wrap it in requestAnimationFrame to avoid ResizeObserver loop limit exceeded error
      window.requestAnimationFrame(() => {
        if (!Array.isArray(entries) || !entries.length) {
          return;
        }
        setWidth(element.offsetWidth);
      });
    });

    observer.observe(element);

    // eslint-disable-next-line consistent-return
    return () => {
      window.ResizeObserver = 0;
    };
  }, []);

  return (
    <Suspense fallback={<LoadingLayout />}>
      <PageLayout title={t('home.title')} avatar="hi">
        <Box>
          <Typography variant="body2">{t('home.intro', { joinArrays: ' ' })}</Typography>

          <Typography variant="h3" sx={{ my: '25px' }}>
            {t('home.subtitle')}
          </Typography>

          <Box sx={rowWrapper} ref={elementRef}>
            <ActivityItem
              icon={<CodeIcon className="homepage-section__activity-icon activity-icon_dark" />}
              title={t('home.activity1.subtitle')}
              color="pink"
              width={width > 600 ? '45%' : '100%'}
            >
              {t('home.activity1.body', { joinArrays: ' ' })}
            </ActivityItem>
            <ActivityItem
              icon={<App className="homepage-section__activity-icon activity-icon_main" />}
              title={t('home.activity2.subtitle')}
              color="blue"
              width={width > 600 ? '45%' : '100%'}
            >
              {t('home.activity2.body', { joinArrays: ' ' })}
            </ActivityItem>
            <ActivityItem
              icon={
                <StoreOutlinedIcon className="homepage-section__activity-icon activity-icon_main" />
              }
              title={t('home.activity3.subtitle')}
              color="blue"
              width={width > 600 ? '45%' : '100%'}
            >
              {t('home.activity3.body', { joinArrays: ' ' })}
            </ActivityItem>
            <ActivityItem
              icon={<Seo className="homepage-section__activity-icon activity-icon_dark" />}
              title={t('home.activity4.subtitle')}
              color="pink"
              width={width > 600 ? '45%' : '100%'}
            >
              {t('home.activity4.body', { joinArrays: ' ' })}
            </ActivityItem>
          </Box>
        </Box>
      </PageLayout>
    </Suspense>
  );
}

export default Home;
