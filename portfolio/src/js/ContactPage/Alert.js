import React from 'react';
import PropTypes from 'prop-types';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { useTranslation } from 'react-i18next';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SimpleAlert(props) {
  const { type, onCloseHandle, open } = props;
  const { t } = useTranslation();

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={onCloseHandle}>
      <Alert onClose={onCloseHandle} severity={type} sx={{ width: '100%' }}>
        {t(`contact.form.${type}`)}
      </Alert>
    </Snackbar>
  );
}
SimpleAlert.propTypes = {
  type: PropTypes.string.isRequired,
  onCloseHandle: PropTypes.func.isRequired,
  open: PropTypes.bool,
};

SimpleAlert.defaultProps = {
  open: false,
};
