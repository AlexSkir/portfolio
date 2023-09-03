import React from 'react';
import { useTranslation } from 'react-i18next';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import emailjs from 'emailjs-com';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Form() {
  const { t } = useTranslation();
  const [name, setName] = React.useState('');
  const [mail, setMail] = React.useState('');
  const [msg, setMsg] = React.useState('');
  const [alert, setAlert] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const letter = {
      from_name: name,
      reply_to: mail,
      message: msg,
    };
    console.log(letter);
    emailjs.send('portfolio_email', 'template_portfolio', letter, 'ESDfL1xe9UlN3Cc2B').then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        setName('');
        setMail('');
        setMsg('');
        setAlert('success');
        setOpen(true);
      },
      (err) => {
        console.log('FAILED...', err);
        setAlert('error');
        setOpen(true);
      },
    );
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Box
      component="form"
      sx={{
        width: '100%',
        maxWidth: '630px',
        backgroundColor: 'primary.background',
        borderRadius: '20px',
        p: { xs: '10px', sm: '30px' },
        mt: '30px',
      }}
      noValidate={false}
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Typography sx={{ fontSize: '16px', lineHeight: '30px', p: '10px' }}>
        {t('contact.form.title', { joinArrays: ' ' })}
      </Typography>
      <TextField
        id="formName"
        label={t('contact.form.name')}
        variant="standard"
        fullWidth
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <TextField
        id="formEmail"
        label="Email:"
        variant="standard"
        fullWidth
        value={mail}
        onChange={(event) => {
          setMail(event.target.value);
        }}
      />
      <TextField
        id="formText"
        label={t('contact.form.msg')}
        variant="standard"
        required
        fullWidth
        multiline
        minRows={1}
        value={msg}
        onChange={(event) => {
          setMsg(event.target.value);
        }}
      />
      <Button
        type="submit"
        sx={{
          mt: '30px',
          p: '10px 30px',
          color: 'primary.contrastText',
          border: '1px solid',
          borderColor: 'secondary.main',
          borderRadius: '20px',
        }}
      >
        {t('contact.form.btn')}
      </Button>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        {alert === 'success' ? (
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            {t('contact.form.alertSuccess')}
          </Alert>
        ) : (
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            {t('contact.form.alertFail')}
          </Alert>
        )}
      </Snackbar>
    </Box>
  );
}
