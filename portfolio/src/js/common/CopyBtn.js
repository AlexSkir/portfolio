import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

export default function CopyBtn(props) {
  const { t } = useTranslation();
  const { copyText, contactName, close } = props;
  const [copySuccess, setCopySuccess] = React.useState(false);
  const theme = useTheme();

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(true);
      setTimeout(() => {
        close();
      }, 500);
      setTimeout(() => {
        if (copySuccess) {
          setCopySuccess(false);
        }
      }, 1000);
    } catch (err) {
      setCopySuccess(false);
    }
  };

  return (
    <Tooltip title={copySuccess ? t('common.copieble.copied') : t('common.copieble.copy')}>
      <Button
        className="copy_btn button_isActive_true"
        sx={{
          background: theme.palette.secondary.gradientBG,
          color: theme.palette.secondary.contrastText,
          m: '10px',
          p: '5px 10px',
          borderRadius: '20px',
          minWidth: 'fit-content',
        }}
        onClick={() => handleCopy(copyText)}
      >
        <Typography variant="body3">{contactName}</Typography>
      </Button>
    </Tooltip>
  );
}

CopyBtn.propTypes = {
  copyText: PropTypes.string.isRequired,
  contactName: PropTypes.string.isRequired,
  close: PropTypes.func,
};

CopyBtn.defaultProps = {
  close: () => { },
};
