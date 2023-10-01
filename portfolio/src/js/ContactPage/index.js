import React from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import PageLayout from '../PageLayout';
import Contacts from './Contacts';
import Form from './Form';

function Contact() {
  const { t } = useTranslation();
  return (
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
      <Contacts />
      <Form />
    </PageLayout>
  );
}

export default Contact;
