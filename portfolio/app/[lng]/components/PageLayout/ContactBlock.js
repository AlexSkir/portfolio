'use client';

import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'next/navigation';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

import ContactItemCopieble from '../common/ContactItemCopieble';
import ResumeDownload from '../common/ResumeDownload';
import PhoneIcon from '../common/iconsJs/PhoneIconGradient';
import { useTranslation } from '../../../i18n/client';

const blockWrapper = {
  flexDirection: 'column',
  width: { xs: '100%', md: '350px' },
  height: { xs: 'auto', md: '350px' },
  p: { xs: '0', md: '30px' },
  justifyContent: 'space-between',
  backgroundColor: { xs: 'primary.paper', md: 'primary.main' },
  borderRadius: '20px',
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

export default function ContactBlock(props) {
  const { open } = props;
  const { lng } = useParams();
  const { t } = useTranslation(lng, 'contact');
  const theme = useTheme();

  return (
    <Box
      className="side-block__contact-card"
      sx={{ ...blockWrapper, display: open ? 'flex' : 'none' }}
    >
      <Box className="side-block__contact-item" sx={contactItemBox}>
        <ContactItemCopieble
          link="tel:+79938996716"
          copyText="+79938996716"
          tooltip={t('items.call')}
          icon={
            <PhoneIcon main={theme.palette.secondary.main} dark={theme.palette.secondary.dark} />
          }
          contactName={t('items.phone')}
        />
      </Box>

      <Divider sx={dividerEl} />

      <Box className="side-block__contact-item" sx={contactItemBox}>
        <ContactItemCopieble
          link="mailto:a.skirnevskaia@gmail.com"
          copyText="a.skirnevskaia@gmail.com"
          tooltip={t('items.message')}
          icon={<DraftsOutlinedIcon sx={{ color: 'secondary.main' }} />}
          contactName="Email"
        />
      </Box>

      <Divider sx={dividerEl} />

      <Box className="side-block__contact-item" sx={contactItemBox}>
        <ContactItemCopieble
          link="https://www.google.com/maps/search/?api=1&query=55.840399,37.490859"
          copyText={t('items.address')}
          tooltip={t('items.map')}
          icon={<LocationOnOutlinedIcon sx={{ color: 'secondary.dark' }} />}
          contactName={t('items.location')}
        />
      </Box>

      <Divider sx={dividerEl} />

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <ResumeDownload
          btnStyle={{
            width: '185px',
            height: '44px',
            color: 'secondary.contrastText',
            borderRadius: '20px',
            gap: '10px',
          }}
        />
      </Box>
    </Box>
  );
}

ContactBlock.propTypes = {
  open: PropTypes.bool.isRequired,
};
