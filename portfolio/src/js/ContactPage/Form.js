import React from 'react';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import emailjs from 'emailjs-com';

export default function Form() {
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
        setAlert(<Alert severity="success">Email sent!</Alert>);
      },
      (err) => {
        console.log('FAILED...', err);
        setAlert(<Alert severity="error">{err}</Alert>);
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
        p: '30px',
        mt: '30px',
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Typography sx={{ fontSize: '16px', lineHeight: '30px', p: '10px' }}>
        I am always open to discussing new projects, opportunities in tech world or a feedback.
      </Typography>
      <TextField
        id="formName"
        label="Name:"
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
        label="Message:"
        variant="standard"
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
        Submit
      </Button>
      {alert}
    </Box>
  );
}
