import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

const contactLink = {
  width: '44px',
  minWidth: '44px',
  height: '44px',
  minHeight: '44px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'primary.contrastText',
};

const contactCopy = {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  m: '10px',
  p: '10px',
  color: 'primary.contrastText',
};

export default function CopyBtn(props) {
  const { t } = useTranslation();
  const { copyText, icon, contactName } = props;
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
    <Tooltip title={copySuccess ? t('common.copieble.copied') : t('common.copieble.copy')}>
      <Button
        className="contact-item__copy-button"
        sx={contactCopy}
        onClick={() => handleCopy(copyText)}
      >
        {icon}
        <Typography variant="body3" sx={{ opacity: '0.5' }}>
          {contactName}
        </Typography>
      </Button>
    </Tooltip>
  );
}

CopyBtn.propTypes = {
  copyText: PropTypes.string.isRequired,
  icon: PropTypes.node,
  contactName: PropTypes.string.isRequired,
};

CopyBtn.defaultProps = {
  icon: <></>,
};
