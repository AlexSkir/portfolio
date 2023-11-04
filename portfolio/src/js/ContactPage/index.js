import React, { lazy, Suspense } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import Contacts from './Contacts';
import Form from './Form';
import Avatar from '../../assets/images/avatar/avatar-heart.png';
import LoadingLayout from '../Suspense/LoadingMainlayout';

const PageLayout = lazy(() => import('../PageLayout'));

function Contact() {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  return (
    <Suspense fallback={<LoadingLayout />}>
      <PageLayout title={t('contact.title')} avatar="heart">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            columnGap: '20px',
            rowGap: 0,
            flexWrap: 'wrap',
            mb: '20px',
          }}
        >
          <Typography
            variant="h4"
            component="h4"
            align="left"
            sx={{ m: '15px 0', whiteSpace: 'nowrap' }}
          >
            {t('contact.name')}
          </Typography>
          <Typography variant="h6" sx={{ opacity: '0.5', whiteSpace: 'nowrap' }}>
            {t('contact.position')}
          </Typography>
        </Box>
        <Contacts locale={i18n.resolvedLanguage} />
        <Form />
      </PageLayout>
    </Suspense>
  );
}

export default Contact;
