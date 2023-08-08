import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import LibraryAddCheckRoundedIcon from '@mui/icons-material/LibraryAddCheckRounded';

import Typography from '../common/typography';
import PhoneIcon from './PhoneIconGradient';
import resume from '../../assets/files/map.pdf';

const blockWrapper = {
  width: '350px',
  height: '350px',
  p: '30px',
  justifyContent: 'space-between',
  backgroundColor: 'primary.main',
};

const contactItemBox = {
  position: 'relative',
  width: '256px',
  '&:hover': { '.side-block__copy-button': { opacity: '0.5' } },
};

const buttonCopy = {
  width: '30px',
  height: '30px',
  minWidth: '30px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: 0,
  right: 0,
  color: 'primary.contrastText',
  opacity: '0',
};

const linkItem = {
  minWidth: '200px',
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
};

const iconWrapper = {
  width: '44px',
  height: '44px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export default function ContactBlock() {
  const [copySuccess, setCopySuccess] = React.useState(false);

  const theme = useTheme();

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(true);
      setTimeout(() => {
        setCopySuccess(false);
      }, 2000);
    } catch (err) {
      setCopySuccess(false);
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.download = 'Skirnevskaia Resume';

    link.href = resume;

    link.click();
  };

  return (
    <Box className="side-block__contact-card flex-col border-radius-20" sx={blockWrapper}>
      <Box className="side-block__contact-item flex-row" sx={contactItemBox}>
        <Tooltip title="Call">
          <Link href="tel:+79771456716" sx={linkItem}>
            <Box sx={iconWrapper}>
              <PhoneIcon main={theme.palette.secondary.main} dark={theme.palette.secondary.dark} />
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
              <Typography variant="body3" sx={{ opacity: '0.5' }}>
                Phone
              </Typography>
              <Typography variant="body3">+79771456716</Typography>
            </Box>
          </Link>
        </Tooltip>

        <Tooltip title={copySuccess ? 'Copied!' : 'Copy'}>
          <Button
            className="side-block__copy-button copy-button"
            sx={buttonCopy}
            onClick={() => handleCopy('+79771456716')}
          >
            {copySuccess ? <LibraryAddCheckRoundedIcon /> : <ContentCopyRoundedIcon />}
          </Button>
        </Tooltip>
      </Box>

      <Divider sx={{ width: '256px', backgroundColor: '#E3E3E3' }} />

      <Box className="side-block__contact-item flex-row" sx={contactItemBox}>
        <Tooltip title="Message">
          <Link href="mailto:a.skirnevskaia@gmail.com" sx={linkItem}>
            <Box sx={iconWrapper}>
              <DraftsOutlinedIcon sx={{ color: 'secondary.main' }} />
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
              <Typography variant="body3" sx={{ opacity: '0.5' }}>
                Email
              </Typography>
              <Typography variant="body3">a.skirnevskaia@gmail.com</Typography>
            </Box>
          </Link>
        </Tooltip>

        <Tooltip title={copySuccess ? 'Copied!' : 'Copy'}>
          <Button
            className="side-block__copy-button copy-button"
            sx={buttonCopy}
            onClick={() => handleCopy('a.skirnevskaia@gmail.com')}
          >
            {copySuccess ? <LibraryAddCheckRoundedIcon /> : <ContentCopyRoundedIcon />}
          </Button>
        </Tooltip>
      </Box>

      <Divider sx={{ width: '256px', backgroundColor: '#E3E3E3' }} />

      <Box className="side-block__contact-item flex-row" sx={contactItemBox}>
        <Tooltip title="On map">
          <Link
            href="https://www.google.com/maps/search/?api=1&query=55.840399,37.490859"
            target="_blank"
            sx={linkItem}
          >
            <Box sx={iconWrapper}>
              <LocationOnOutlinedIcon sx={{ color: 'secondary.dark' }} />
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
              <Typography variant="body3" sx={{ opacity: '0.5' }}>
                Location
              </Typography>
              <Typography variant="body3">Moscow, Russia</Typography>
            </Box>
          </Link>
        </Tooltip>

        <Tooltip title={copySuccess ? 'Copied!' : 'Copy'}>
          <Button
            className="side-block__copy-button copy-button"
            sx={buttonCopy}
            onClick={() => handleCopy('Moscow, Russia')}
          >
            {copySuccess ? <LibraryAddCheckRoundedIcon /> : <ContentCopyRoundedIcon />}
          </Button>
        </Tooltip>
      </Box>

      <Divider sx={{ width: '256px', backgroundColor: '#E3E3E3' }} />

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          className="button_isActive_true"
          sx={{ width: '185px', height: '44px', color: 'secondary.contrastText' }}
          onClick={handleDownloadResume}
        >
          <FileDownloadOutlinedIcon
            sx={{
              mr: '10px',
              color: 'secondary.contrastText',
            }}
          />
          Download Resume
        </Button>
      </Box>
    </Box>
  );
}
