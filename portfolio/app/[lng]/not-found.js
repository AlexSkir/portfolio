'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useTranslation } from '../i18n/client';
// import PageLayout from '../PageLayout';

/* <PageLayout title="404" avatar="404"> */

export default function NotFound() {
  const { lng } = useParams();
  const { t } = useTranslation(lng);
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h4" align="center" sx={{ mb: '20px' }}>
        {t('common.nomatch.title')}
      </Typography>
      <Button size="large" variant="contained" color="secondary" role="button">
        <Link href={`/${lng}`} underline="none" color="black">
          <Typography variant="2">{t('common.nomatch.btn')}</Typography>
        </Link>
      </Button>
    </Box>
  );
}
