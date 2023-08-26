import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';

import ContactItemCopieble from '../common/ContactItemCopieble';
import CallIcon from '../common/icons/CallIconGradient';
import EmailIcon from '../common/icons/EmailIconGradient';

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

function Contacts() {
  const theme = useTheme();
  return (
    <Box
      className="contact__contact-items-block"
      sx={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}
    >
      <Box className="contact__contact-item" sx={contactItem}>
        <ContactItemCopieble
          link="tel:+79771456716"
          copyText="+79771456716"
          tooltip="Call"
          icon={
            <CallIcon main={theme.palette.secondary.main} dark={theme.palette.secondary.dark} />
          }
          contactName="Phone"
        />
      </Box>

      <Box
        className="contact__contact-item"
        sx={{ ...contactItem, backgroundColor: 'secondary.blueBox' }}
      >
        <ContactItemCopieble
          link="mailto:a.skirnevskaia@gmail.com"
          copyText="a.skirnevskaia@gmail.com"
          tooltip="Message"
          icon={
            <EmailIcon main={theme.palette.secondary.main} dark={theme.palette.secondary.dark} />
          }
          contactName="Email"
        />
      </Box>

      <Box
        className="contact__contact-item"
        sx={{ ...contactItem, backgroundColor: 'secondary.blueBox' }}
      >
        <ContactItemCopieble
          link="https://wa.me/+79771456716"
          copyText="+79771456716"
          tooltip="Open WhatsApp"
          icon={<WhatsAppIcon sx={{ color: '#25D366' }} />}
          contactName="WhatsApp"
        />
      </Box>

      <Box className="contact__contact-item" sx={contactItem}>
        <ContactItemCopieble
          link="https://t.me/alexskir"
          copyText="@alexskir"
          tooltip="Open Telegram"
          icon={<TelegramIcon sx={{ color: '#229ED9' }} />}
          contactName="Telegram"
        />
      </Box>
    </Box>
  );
}

export default Contacts;
