import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
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
  width: '70px',
  height: '60px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'primary.light',
};

export default function SocialIconsBlock() {
  return (
    <Box className="side-block__social-icons flex-row" sx={{ my: '20px' }}>
      <Link
        className="border-radius-8"
        href="https://wa.me/+79771456716"
        target="_blank"
        sx={{ ...iconLink, mr: '9px' }}
      >
        <WhatsAppIcon sx={{ color: '#25D366' }} />
      </Link>
      <Link
        className="border-radius-8"
        href="https://t.me/alexskir"
        target="_blank"
        sx={{ ...iconLink, mr: '9px' }}
      >
        <TelegramIcon sx={{ color: '#229ED9' }} />
      </Link>
      <Link
        className="border-radius-8"
        href="https://github.com/AlexSkir"
        target="_blank"
        sx={{ ...iconLink, mr: '9px' }}
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
    </Box>
  );
}
