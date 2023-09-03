import React from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';

import PageLayout from '../PageLayout';
import SEO from '../common/SEO';
import CodeIcon from '../../assets/images/code.svg';
import App from '../../assets/images/App.svg';
import Seo from '../../assets/images/seo.svg';

import ActivityItem from './Activity';

const rowWrapper = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '25px',
  justifyContent: 'flex-start',
};

function Home() {
  const { t } = useTranslation();
  return (
    <PageLayout title={t('home.title')} avatar="hi">
      <SEO
        title={t('home.seo.title')}
        description={t('home.seo.description', { joinArrays: ' ' })}
      />
      <Box>
        <Typography variant="body2">{t('home.intro', { joinArrays: ' ' })}</Typography>

        <Typography variant="h3" sx={{ my: '25px' }}>
          {t('home.subtitle')}
        </Typography>

        <Box sx={rowWrapper}>
          <ActivityItem
            icon={<CodeIcon className="homepage-section__activity-icon activity-icon_dark" />}
            title={t('home.activity1.subtitle')}
            color="pink"
          >
            {t('home.activity1.body', { joinArrays: ' ' })}
          </ActivityItem>

          <ActivityItem
            icon={<App className="homepage-section__activity-icon activity-icon_main" />}
            title={t('home.activity2.subtitle')}
            color="blue"
          >
            {t('home.activity2.body', { joinArrays: ' ' })}
          </ActivityItem>

          <ActivityItem
            icon={
              <StoreOutlinedIcon className="homepage-section__activity-icon activity-icon_main" />
            }
            title={t('home.activity3.subtitle')}
            color="blue"
          >
            {t('home.activity3.body', { joinArrays: ' ' })}
          </ActivityItem>

          <ActivityItem
            icon={<Seo className="homepage-section__activity-icon activity-icon_dark" />}
            title={t('home.activity4.subtitle')}
            color="pink"
          >
            {t('home.activity4.body', { joinArrays: ' ' })}
          </ActivityItem>
        </Box>
      </Box>
    </PageLayout>
  );
}

export default Home;
