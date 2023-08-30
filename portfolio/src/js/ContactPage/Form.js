import React from 'react';
import { useTranslation } from 'react-i18next';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import emailjs from 'emailjs-com';

export default function Form() {
  const { t } = useTranslation();
  const [name, setName] = React.useState('');
  const [mail, setMail] = React.useState('');
  const [msg, setMsg] = React.useState('');
  const [alert, setAlert] = React.useState(<></>);

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
        setAlert(<Alert severity="success">{t('contact.form.alertSuccess')}</Alert>);
        setTimeout(() => {
          setAlert(<></>);
        }, 5000);
      },
      (err) => {
        console.log('FAILED...', err);
        setAlert(<Alert severity="error">{t('contact.form.alertFail')}</Alert>);
        setTimeout(() => {
          setAlert(<></>);
        }, 10000);
      },
    );
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
        {t('contact.form.title')}
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
      {alert}
    </Box>
  );
}
