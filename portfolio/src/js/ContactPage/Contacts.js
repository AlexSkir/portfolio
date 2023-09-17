import React from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';

import ContactItemCopieble from '../common/ContactItemCopieble';
import CallIcon from '../common/icons/CallIconGradient';
import EmailIcon from '../common/icons/EmailIconGradient';
import HeadHunter from '../../assets/images/icons/hh.png';

const contactItem = {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  width: '100%',
  maxWidth: { xs: 'unset', sm: '45%' },
  minWidth: { xs: 'unset', md: '270px' },
  height: { xs: 'auto', md: '100px' },
  p: { xs: '10px', md: '30px' },
  pl: { xs: '0', md: '20px' },
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
  const { i18n, t } = useTranslation();
  const theme = useTheme();
  return (
    <Box
      className="contact__contact-items-block"
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        flexWrap: 'wrap',
        gap: { xs: '0', sm: '10px', md: '30px' },
        maxWidth: '630px',
      }}
    >
      <Box className="contact__contact-item" sx={contactItem}>
        <ContactItemCopieble
          link="tel:+79939056716"
          copyText="+79939056716"
          tooltip={t('contact.items.call')}
          icon={
            <CallIcon main={theme.palette.secondary.main} dark={theme.palette.secondary.dark} />
          }
          contactName={t('contact.items.phone')}
        />
      </Box>

      <Box
        className="contact__contact-item"
        sx={{ ...contactItem, backgroundColor: { xs: 'unset', sm: 'secondary.blueBox' } }}
      >
        <ContactItemCopieble
          link="mailto:a.skirnevskaia@gmail.com"
          copyText="a.skirnevskaia@gmail.com"
          tooltip={t('contact.items.message')}
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
          link="https://wa.me/+79939056716"
          copyText="+79939056716"
          tooltip={t('contact.items.whatsup')}
          icon={<WhatsAppIcon sx={{ color: '#25D366' }} />}
          contactName="WhatsApp"
        />
      </Box>

      <Box className="contact__contact-item" sx={contactItem}>
        <ContactItemCopieble
          link="https://t.me/alexskir"
          copyText="+79939056716"
          tooltip={t('contact.items.telegram')}
          icon={<TelegramIcon sx={{ color: '#229ED9' }} />}
          contactName="Telegram"
        />
      </Box>

      <Box className="contact__contact-item" sx={contactItem}>
        <ContactItemCopieble
          link="https://github.com/AlexSkir"
          copyText="AlexSkir"
          tooltip={t('contact.items.gh')}
          icon={<GitHubIcon sx={{ color: '#000000' }} />}
          contactName="GitHub"
        />
      </Box>

      <Box
        className="contact__contact-item"
        sx={{ ...contactItem, backgroundColor: { xs: 'unset', sm: 'secondary.blueBox' } }}
      >
        <ContactItemCopieble
          link={
            i18n.resolvedLanguage === 'en'
              ? 'https://hh.ru/resume/1840c148ff0bdaee9f0039ed1f734b67763447'
              : 'https://hh.ru/resume/62f371a2ff0810d5600039ed1f48674e706c43'
          }
          copyText={t('common.name')}
          tooltip={t('contact.items.hh')}
          icon={<Box sx={iconHH} />}
          contactName="HeadHunter"
        />
      </Box>
    </Box>
  );
}

export default Contacts;
