'use client';

import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@mui/material/Tooltip';
import Typography from '../Typography';

export default function CopyBtn(props) {
  const { copyText, contactName, close, t } = props;
  const [copySuccess, setCopySuccess] = React.useState(false);

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(true);
      setTimeout(() => {
        if (close) {
          close();
        }
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
      <button
        type="button"
        className="copy_btn button_isActive_true"
        onClick={() => handleCopy(copyText)}
      >
        <Typography variant="body3">{contactName}</Typography>
      </button>
    </Tooltip>
  );
}

CopyBtn.propTypes = {
  copyText: PropTypes.string.isRequired,
  contactName: PropTypes.string.isRequired,
  close: PropTypes.func,
  t: PropTypes.func.isRequired,
};
