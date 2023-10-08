import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';

const Snackbar = lazy(() => import('@mui/material/Snackbar'));
const Alert = lazy(() => import('@mui/material/Alert'));

export default function SimpleAlert(props) {
  const { type, onCloseHandle, open = false, severity } = props;

  return (
    <Suspense fallback={<div>.</div>}>
      <Snackbar open={open} autoHideDuration={6000} onClose={onCloseHandle}>
        <Alert
          elevation={6}
          variant="filled"
          onClose={onCloseHandle}
          severity={severity}
          sx={{ width: '100%' }}
        >
          {type}
        </Alert>
      </Snackbar>
    </Suspense>
  );
}

SimpleAlert.propTypes = {
  type: PropTypes.string.isRequired,
  onCloseHandle: PropTypes.func.isRequired,
  severity: PropTypes.string.isRequired,
  open: PropTypes.bool,
};
