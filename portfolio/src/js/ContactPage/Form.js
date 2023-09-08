import React from 'react';
import { useTranslation } from 'react-i18next';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';
import SimpleAlert from './Alert';

export default function Form() {
  const { t } = useTranslation();
  const recaptchaRef = React.createRef();
  const [name, setName] = React.useState('');
  const [mail, setMail] = React.useState('');
  const [msg, setMsg] = React.useState('');
  const [alert, setAlert] = React.useState('success');
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const recaptchaValue = recaptchaRef.current.getValue();
    if (!recaptchaValue) {
      setAlert('warning');
      setOpen(true);
      return;
    }
    const letter = {
      from_name: name,
      reply_to: mail,
      message: msg,
      'g-recaptcha-response': recaptchaValue,
    };
    emailjs.send('portfolio_email', 'template_portfolio', letter, process.env.emailjs_user_id).then(
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
      {msg ? <ReCAPTCHA ref={recaptchaRef} sitekey={process.env.captcha_site_key} /> : <></>}
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

      <SimpleAlert type={alert} onCloseHandle={handleClose} open={open} />
    </Box>
  );
}
