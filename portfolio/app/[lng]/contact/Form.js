'use client';

import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import emailjs from 'emailjs-com';
import LoadingBlock from '../components/common/LoadingBlock';

const ReCAPTCHA = lazy(() => import('react-google-recaptcha'));
const Typography = lazy(() => import('../components/Typography'));
const MyTextField = lazy(() => import('./Textfiled'));
const MyAlert = lazy(() => import('./Alert'));

export default function Form(props) {
  const { t } = props;
  const recaptchaRef = React.createRef();
  const [name, setName] = React.useState(localStorage.getItem('form-name') || '');
  const [mail, setMail] = React.useState(localStorage.getItem('form-email') || '');
  const [msg, setMsg] = React.useState(localStorage.getItem('form-msg') || '');
  const [alert, setAlert] = React.useState('success');
  const [open, setOpen] = React.useState(false);
  const site_key = process.env.NEXT_PUBLIC_captcha_site_key;
  const user_id = process.env.NEXT_PUBLIC_emailjs_user_id;

  const clearAll = () => {
    setName('');
    setMail('');
    setMsg('');
    localStorage.removeItem('form-name');
    localStorage.removeItem('form-email');
    localStorage.removeItem('form-text');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const recaptchaValue = recaptchaRef?.current?.getValue();
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
    console.log('sent', letter);
    clearAll();
    emailjs.send('portfolio_email', 'template_portfolio', letter, user_id).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        clearAll();
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
    <form className="contact-form" autoComplete="off" onSubmit={handleSubmit}>
      <Suspense fallback={<LoadingBlock width="100%" height="100px" />}>
        <Typography classes="contact-form__title">{t.form.title.join(' ')}</Typography>
      </Suspense>

      <div style={{ marginTop: '16px' }}>
        <Suspense
          fallback={<LoadingBlock width="100%" height="32px" style={{ marginTop: '16px' }} />}
        >
          <MyTextField
            id="formName"
            label={t.form.name}
            value={name}
            onChange={(event) => {
              localStorage.setItem('form-name', event.target.value);
              setName(event.target.value);
            }}
          />
        </Suspense>
      </div>

      <div style={{ marginTop: '16px' }}>
        <Suspense fallback={<LoadingBlock width="100%" height="32px" />}>
          <MyTextField
            id="formEmail"
            label="Email:"
            value={mail}
            type="email"
            onChange={(event) => {
              localStorage.setItem('form-email', event.target.value);
              setMail(event.target.value);
            }}
          />
        </Suspense>
      </div>

      <div style={{ marginTop: '16px' }}>
        <Suspense fallback={<LoadingBlock width="100%" height="32px" />}>
          <MyTextField
            id="formText"
            label={t.form.msg}
            value={msg}
            component="textarea"
            required
            onChange={(event) => {
              localStorage.setItem('form-text', event.target.value);
              setMsg(event.target.value);
            }}
          />
        </Suspense>
      </div>

      {msg ? (
        <div style={{ marginTop: '20px' }}>
          <Suspense fallback={<LoadingBlock width="300px" height="74px" variant="rectangular" />}>
            <ReCAPTCHA ref={recaptchaRef} sitekey={site_key} theme={document.body.className} />
          </Suspense>
        </div>
      ) : (
        <></>
      )}
      <button className="contact-form__submit-btn MyTypography MyTypography-button" type="submit">
        {t.form.btn}
      </button>
      <Suspense fallback={<span />}>
        <MyAlert type={t.form[alert]} severity={alert} onCloseHandle={handleClose} open={open} />
      </Suspense>
    </form>
  );
}

Form.propTypes = {
  t: PropTypes.object.isRequired,
};
