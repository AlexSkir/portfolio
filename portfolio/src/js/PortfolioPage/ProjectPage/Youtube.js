import React from 'react';
import { useTranslation } from 'react-i18next';
import Typography from '@mui/material/Typography';
import SimpleTable from './SimpleTable';

export default function YoutubeApp() {
  const { t } = useTranslation();
  return (
    <>
      <Typography variant="h6" sx={{ mb: '20px' }}>
        {t('projects.features', { ns: 'projects' })}
      </Typography>
      <SimpleTable
        features={t('projects.youtube.more.features', {
          returnObjects: true,
          ns: 'projects',
        })}
      />
    </>
  );
}
