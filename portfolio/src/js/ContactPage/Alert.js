import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function SimpleAlert(props) {
  const { onCloseHandle, open = false, severity } = props;
  const { t } = useTranslation();

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={onCloseHandle}>
      <Alert
        elevation={6}
        variant="filled"
        onClose={onCloseHandle}
        severity={severity}
        sx={{ width: '100%' }}
      >
        {t(`contact.form.${severity}`)}
      </Alert>
    </Snackbar>
  );
}

SimpleAlert.propTypes = {
  onCloseHandle: PropTypes.func.isRequired,
  severity: PropTypes.string.isRequired,
  open: PropTypes.bool,
};
