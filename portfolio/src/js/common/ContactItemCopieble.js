import React from 'react';
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
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  m: 0,
  p: 0,
  color: 'primary.contrastText',
};

export default function ContactItemCopieble(props) {
  const { link, copyText, tooltip, icon, contactName } = props;
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
    <>
      <Tooltip title={tooltip}>
        <Link href={link} sx={contactLink}>
          {icon}
        </Link>
      </Tooltip>

      <Tooltip title={copySuccess ? 'Copied!' : 'Copy'}>
        <Button
          className="contact-item__copy-button"
          sx={contactCopy}
          onClick={() => handleCopy(copyText)}
        >
          <Typography variant="body3" sx={{ opacity: '0.5' }}>
            {contactName}
          </Typography>
          <Typography variant="body3" sx={{ wordBreak: 'break-word', textAlign: 'left' }}>
            {copyText}
          </Typography>
        </Button>
      </Tooltip>
    </>
  );
}

ContactItemCopieble.propTypes = {
  link: PropTypes.string.isRequired,
  copyText: PropTypes.string.isRequired,
  tooltip: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  contactName: PropTypes.string.isRequired,
};
