'use client';

import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@mui/material/Tooltip';
import { useParams } from 'next/navigation';
import Typography from '../Typography';
import useTranslation from '../../../i18n/client';

export default function CopyBtn(props) {
  const { copyText, close } = props;
  const { lng } = useParams();
  const { t } = useTranslation(lng);
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
        <Typography variant="body3">{t('common.copyLink')}</Typography>
      </button>
    </Tooltip>
  );
}

CopyBtn.propTypes = {
  copyText: PropTypes.string.isRequired,
  close: PropTypes.func,
};
