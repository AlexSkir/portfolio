import React from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import PageLayout from '../PageLayout';

export default function NoMatch() {
  const { t } = useTranslation();
  return (
    <PageLayout title="404" avatar="404">
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h4" align="center" sx={{ mb: '20px' }}>
          {t('common.nomatch.title')}
        </Typography>
        <Button size="large" variant="contained" color="secondary" role="button">
          <Link href="/" underline="none" color="black">
            <Typography variant="2">{t('common.nomatch.btn')}</Typography>
          </Link>
        </Button>
      </Box>
    </PageLayout>
  );
}
