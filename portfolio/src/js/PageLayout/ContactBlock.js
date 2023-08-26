import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

import ContactItemCopieble from '../common/ContactItemCopieble';
import PhoneIcon from '../common/icons/PhoneIconGradient';
import resume from '../../assets/files/map.pdf';

const blockWrapper = {
  display: 'flex',
  flexDirection: 'column',
  width: { xs: '100%', md: '350px' },
  height: { xs: 'auto', md: '350px' },
  p: { xs: '0', md: '30px' },
  justifyContent: 'space-between',
  backgroundColor: { xs: 'primary.paper', md: 'primary.main' },
};

const contactItemBox = {
  display: { xs: 'none', md: 'flex' },
  width: '256px',
};

const dividerEl = {
  display: { xs: 'none', md: 'block' },
  width: '256px',
  backgroundColor: '#E3E3E3',
};

export default function ContactBlock() {
  const theme = useTheme();

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.download = 'Skirnevskaia Resume';

    link.href = resume;

    link.click();
  };

  return (
    <Box className="side-block__contact-card border-radius-20" sx={blockWrapper}>
      <Box className="side-block__contact-item" sx={contactItemBox}>
        <ContactItemCopieble
          link="tel:+79771456716"
          copyText="+79771456716"
          tooltip="Call"
          icon={
            <PhoneIcon main={theme.palette.secondary.main} dark={theme.palette.secondary.dark} />
          }
          contactName="Phone"
        />
      </Box>

      <Divider sx={dividerEl} />

      <Box className="side-block__contact-item" sx={contactItemBox}>
        <ContactItemCopieble
          link="mailto:a.skirnevskaia@gmail.com"
          copyText="a.skirnevskaia@gmail.com"
          tooltip="Message"
          icon={<DraftsOutlinedIcon sx={{ color: 'secondary.main' }} />}
          contactName="Email"
        />
      </Box>

      <Divider sx={dividerEl} />

      <Box className="side-block__contact-item" sx={contactItemBox}>
        <ContactItemCopieble
          link="https://www.google.com/maps/search/?api=1&query=55.840399,37.490859"
          copyText="Moscow, Russia"
          tooltip="Show on map"
          icon={<LocationOnOutlinedIcon sx={{ color: 'secondary.dark' }} />}
          contactName="Location"
        />
      </Box>

      <Divider sx={dividerEl} />

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          className="button_isActive_true border-radius-20"
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
