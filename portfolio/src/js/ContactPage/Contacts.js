import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';

import ContactItemCopieble from '../common/ContactItemCopieble';
import CallIcon from '../common/icons/CallIconGradient';
import EmailIcon from '../common/icons/EmailIconGradient';
import HeadHunter from '../../assets/images/hh.png';

const contactItem = {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  width: '100%',
  maxWidth: '300px',
  height: { xs: 'auto', sm: '100px' },
  p: { xs: '10px', sm: '30px' },
  pl: { xs: '0', sm: '20px' },
  borderRadius: '8px',
  backgroundColor: { xs: 'unset', sm: 'secondary.pinkBox' },
  '& *': { opacity: 1 },
};

const iconHH = {
  width: '25px',
  height: '25px',
  backgroundImage: `url(${HeadHunter})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  borderRadius: '50%',
};

function Contacts() {
  const theme = useTheme();
  return (
    <Box
      className="contact__contact-items-block"
      sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: '0', sm: '30px' }, maxWidth: '630px' }}
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
        sx={{ ...contactItem, backgroundColor: { xs: 'unset', sm: 'secondary.blueBox' } }}
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
        sx={{ ...contactItem, backgroundColor: { xs: 'unset', sm: 'secondary.blueBox' } }}
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

      <Box className="contact__contact-item" sx={contactItem}>
        <ContactItemCopieble
          link="https://github.com/AlexSkir"
          copyText="AlexSkir"
          tooltip="Open GitHub"
          icon={<GitHubIcon sx={{ color: '#000000' }} />}
          contactName="GitHub"
        />
      </Box>

      <Box
        className="contact__contact-item"
        sx={{ ...contactItem, backgroundColor: { xs: 'unset', sm: 'secondary.blueBox' } }}
      >
        <ContactItemCopieble
          link="https://hh.ru/resume/62f371a2ff0810d5600039ed1f48674e706c43"
          copyText="Aleksandra Skirnevskaia"
          tooltip="Copy link"
          icon={<Box sx={iconHH} />}
          contactName="HeadHunter"
        />
      </Box>
    </Box>
  );
}

export default Contacts;
