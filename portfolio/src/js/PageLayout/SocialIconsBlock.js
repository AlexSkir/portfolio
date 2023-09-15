import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import HeadHunter from '../../assets/images/icons/hh.png';
import PhoneIcon from '../common/icons/PhoneIconGradient';
import ResumeDownload from '../common/ResumeDownload';

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

export default function SocialIconsBlock(props) {
  const { open } = props;
  const theme = useTheme();

  const iconLink = {
    width: '70px',
    height: '70px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: open ? 'primary.light' : 'unset',
    mr: '9px',
    borderRadius: '8px',
  };

  return (
    <Box
      className="side-block__social-icons"
      sx={{ my: open ? '20px' : '80px', display: 'flex', flexDirection: open ? 'row' : 'column' }}
    >
      {open ? (
        <></>
      ) : (
        <Link href="tel:+79771456716" target="_blank" sx={iconLink} aria-label="dial +79771456716">
          <PhoneIcon main={theme.palette.secondary.main} dark={theme.palette.secondary.dark} />
        </Link>
      )}
      {open ? (
        <></>
      ) : (
        <Link
          href="mailto:a.skirnevskaia@gmail.com"
          target="_blank"
          sx={iconLink}
          aria-label="mail to a.skirnevskaia@gmail.com"
        >
          <DraftsOutlinedIcon sx={{ color: 'secondary.dark' }} />
        </Link>
      )}
      <Link
        href="https://wa.me/+79771456716"
        target="_blank"
        sx={iconLink}
        aria-label="message +79771456716 in whatsapp"
      >
        <WhatsAppIcon sx={{ color: '#25D366' }} />
      </Link>
      <Link
        href="https://t.me/alexskir"
        target="_blank"
        sx={iconLink}
        aria-label="message to alexskir in telegram"
      >
        <TelegramIcon sx={{ color: '#229ED9' }} />
      </Link>
      <Link
        href="https://github.com/AlexSkir"
        target="_blank"
        sx={iconLink}
        aria-label="open alexskir github profile in new tab"
      >
        <GitHubIcon sx={{ color: '#000000' }} />
      </Link>
      <Link
        href="https://hh.ru/resume/62f371a2ff0810d5600039ed1f48674e706c43"
        target="_blank"
        sx={iconLink}
        aria-label="open resume on headhunter"
      >
        <Box sx={iconHH} />
      </Link>

      <ResumeDownload btnStyle={{ ...iconLink, display: open ? 'none' : 'flex' }} />
    </Box>
  );
}

SocialIconsBlock.propTypes = {
  open: PropTypes.bool.isRequired,
};
