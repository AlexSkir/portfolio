import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

import ContactItemCopieble from '../common/ContactItemCopieble';
import PhoneIcon from '../common/icons/PhoneIconGradient';
import ResumeDownload from '../common/ResumeDownload';

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
  const { t } = useTranslation();
  const { open } = props;
  const theme = useTheme();

  return (
    <Box
      className="side-block__contact-card"
      sx={{ ...blockWrapper, display: open ? 'flex' : 'none' }}
    >
      <Box className="side-block__contact-item" sx={contactItemBox}>
        <ContactItemCopieble
          link="tel:+79939056716"
          copyText="+79939056716"
          tooltip={t('contact.items.call')}
          icon={
            <PhoneIcon main={theme.palette.secondary.main} dark={theme.palette.secondary.dark} />
          }
          contactName={t('contact.items.phone')}
        />
      </Box>

      <Divider sx={dividerEl} />

      <Box className="side-block__contact-item" sx={contactItemBox}>
        <ContactItemCopieble
          link="mailto:a.skirnevskaia@gmail.com"
          copyText="a.skirnevskaia@gmail.com"
          tooltip={t('contact.items.message')}
          icon={<DraftsOutlinedIcon sx={{ color: 'secondary.main' }} />}
          contactName="Email"
        />
      </Box>

      <Divider sx={dividerEl} />

      <Box className="side-block__contact-item" sx={contactItemBox}>
        <ContactItemCopieble
          link="https://www.google.com/maps/search/?api=1&query=55.840399,37.490859"
          copyText={t('contact.items.address')}
          tooltip={t('contact.items.map')}
          icon={<LocationOnOutlinedIcon sx={{ color: 'secondary.dark' }} />}
          contactName={t('contact.items.location')}
        />
      </Box>

      <Divider sx={dividerEl} />

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <ResumeDownload
          title={t('common.downloadBtn')}
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
