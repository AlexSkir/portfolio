import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const contactIcon = {
  width: '44px',
  minWidth: '44px',
  height: '44px',
  minHeight: '44px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const contactCopy = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  m: 0,
  p: 0,
  color: 'primary.contrastText',
};

const linkText = {
  wordBreak: 'break-word',
  textAlign: 'left',
  color: 'primary.contrastText',
  borderBottom: '1px solid',
  borderColor: 'primary.contrastText',
};

export default function ContactItemCopieble(props) {
  const { t } = useTranslation();
  const { link, copyText, icon, contactName } = props;
  const [copySuccess, setCopySuccess] = React.useState(false);

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

  return (
    <Box
      className="contact-item__copy-button"
      sx={{ display: 'flex', cursor: 'pointer', width: '100%' }}
      onMouseUp={() => handleCopy(copyText)}
    >
      <Box sx={contactIcon}>{icon}</Box>
      <Box sx={contactCopy}>
        <Typography variant="body3" sx={{ opacity: '0.5' }}>
          {contactName}
          <Typography component="span" sx={{ ml: '15px', fontSize: '10px', userSelect: 'none' }}>
            {copySuccess ? t('common.copieble.copied') : ''}
          </Typography>
        </Typography>

        <Link href={link} target="_blank">
          <Typography variant="body3" sx={linkText}>
            {copyText}
          </Typography>
        </Link>
      </Box>
    </Box>
  );
}

ContactItemCopieble.propTypes = {
  link: PropTypes.string.isRequired,
  copyText: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  contactName: PropTypes.string.isRequired,
};
