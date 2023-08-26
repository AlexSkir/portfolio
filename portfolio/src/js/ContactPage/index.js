import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';

import PageLayout from '../PageLayout';
import SEO from '../common/SEO';

import Contacts from './Contacts';

const descr = `ff`;

const contactItem = {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  width: '100%',
  maxWidth: '300px',
  height: '100px',
  p: '30px',
  pl: '20px',
  borderRadius: '8px',
  backgroundColor: 'secondary.pinkBox',
  '& *': { opacity: 1 },
};

function Contact() {
  const theme = useTheme();
  return (
    <PageLayout title="Contact" avatar="heart">
      <SEO title="Aleksandra Skirnevskaia - About me" description={descr} />
      <Contacts />
    </PageLayout>
  );
}

export default Contact;
