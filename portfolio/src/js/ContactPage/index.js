import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import PageLayout from '../PageLayout';
import SEO from '../common/SEO';

import Contacts from './Contacts';
import Form from './Form';

function Contact() {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  return (
    <PageLayout title={t('contact.title')} avatar="heart">
      <SEO title={t('contact.seo.title')} description={t('contact.seo.description')} />
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
  );
}

export default Contact;
