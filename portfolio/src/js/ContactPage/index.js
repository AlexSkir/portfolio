import React from 'react';
import Box from '@mui/material/Box';
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
      <Contacts />
      <Form />
    </PageLayout>
  );
}

export default Contact;
