import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import HeadHunter from '../../assets/images/hh.png';

const bgImage = {
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
};

const iconHH = {
  width: '25px',
  height: '25px',
  backgroundImage: `url(${HeadHunter})`,
  ...bgImage,
  borderRadius: '50%',
};

const iconLink = {
  width: { xs: '35px', md: '70px' },
  height: { xs: '35px', md: '70px' },
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'primary.light',
  mr: '9px',
};

export default function SocialIconsBlock() {
  return (
    <Box
      className="side-block__social-icons"
      sx={{ my: '20px', display: 'flex', flexDirection: 'row' }}
    >
      <Link
        className="border-radius-8"
        href="https://wa.me/+79771456716"
        target="_blank"
        sx={iconLink}
      >
        <WhatsAppIcon sx={{ color: '#25D366' }} />
      </Link>
      <Link className="border-radius-8" href="https://t.me/alexskir" target="_blank" sx={iconLink}>
        <TelegramIcon sx={{ color: '#229ED9' }} />
      </Link>
      <Link
        className="border-radius-8"
        href="https://github.com/AlexSkir"
        target="_blank"
        sx={iconLink}
      >
        <GitHubIcon sx={{ color: '#000000' }} />
      </Link>
      <Link
        className="border-radius-8"
        href="https://hh.ru/resume/62f371a2ff0810d5600039ed1f48674e706c43"
        target="_blank"
        sx={iconLink}
      >
        <Box sx={iconHH} />
      </Link>
      <Link
        className="border-radius-8"
        href="tel:+79771456716"
        target="_blank"
        sx={{ ...iconLink, display: { xs: 'flex', md: 'none' } }}
      >
        <PhoneAndroidOutlinedIcon sx={{ color: 'secondary.main' }} />
      </Link>
      <Link
        className="border-radius-8"
        href="mailto:a.skirnevskaia@gmail.com"
        target="_blank"
        sx={{ ...iconLink, display: { xs: 'flex', md: 'none' }, mr: 0 }}
      >
        <DraftsOutlinedIcon sx={{ color: 'secondary.dark' }} />
      </Link>
    </Box>
  );
}
