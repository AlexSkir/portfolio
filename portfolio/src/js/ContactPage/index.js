import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import PageLayout from '../PageLayout';
import SEO from '../common/SEO';

import Contacts from './Contacts';
import Form from './Form';

const descr = `ff`;

function Contact() {
  const theme = useTheme();
  return (
    <PageLayout title="Contact" avatar="heart">
      <SEO title="Aleksandra Skirnevskaia - About me" description={descr} />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
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
          Aleksandra Skirnevskaia
        </Typography>
        -
        <Typography variant="h6" sx={{ opacity: '0.5', whiteSpace: 'nowrap' }}>
          Frontend Developer
        </Typography>
      </Box>
      <Contacts />
      <Form />
    </PageLayout>
  );
}

export default Contact;
