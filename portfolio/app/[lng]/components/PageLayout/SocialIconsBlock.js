import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Email from '../../assets/svg/Email.svg';
import Github from '../../assets/svg/gh-pages.svg';
import Telegram from '../../assets/svg/Telegram.svg';
import Whatsapp from '../../assets/svg/Whatsapp.svg';
import HeadHunter from '../../../../assets/images/icons/hh.png';
import PhoneIcon from '../common/iconsJs/PhoneIconGradient';
import ResumeDownload from '../common/ResumeDownload';

export default function SocialIconsBlock(props) {
  const { open } = props;
  const theme = useTheme();

  return (
    <div
      className="side-block__social-icons"
      style={{
        margin: open ? '20px 0' : '80px 0',
        display: 'flex',
        flexDirection: open ? 'row' : 'column',
      }}
    >
      {open ? (
        <></>
      ) : (
        <a
          className="social-block__link"
          href="tel:+79938996716"
          target="_blank"
          rel="noreferrer"
          aria-label="dial +79938996716"
          style={{ backgroundColor: open ? 'primary.light' : 'unset' }}
        >
          <PhoneIcon main={theme.palette.secondary.main} dark={theme.palette.secondary.dark} />
        </a>
      )}
      {open ? (
        <></>
      ) : (
        <a
          className="social-block__link"
          href="mailto:a.skirnevskaia@gmail.com"
          target="_blank"
          rel="noreferrer"
          aria-label="mail to a.skirnevskaia@gmail.com"
        >
          <Email className="MySvg-icon secondary_dark" />
        </a>
      )}
      <a
        className={`social-block__link ${open ? 'social-link_open' : ''}`}
        href="https://wa.me/+79938996716"
        target="_blank"
        rel="noreferrer"
        aria-label="message +79938996716 in whatsapp"
      >
        <Whatsapp className="MySvg-icon" style={{ fill: '#25D366' }} />
      </a>
      <a
        className={`social-block__link ${open ? 'social-link_open' : ''}`}
        href="https://t.me/alexskir"
        target="_blank"
        rel="noreferrer"
        aria-label="message to alexskir in telegram"
      >
        <Telegram className="MySvg-icon" style={{ fill: '#229ED9' }} />
      </a>
      <a
        className={`social-block__link ${open ? 'social-link_open' : ''}`}
        href="https://github.com/AlexSkir"
        target="_blank"
        rel="noreferrer"
        aria-label="open alexskir github profile in new tab"
      >
        <Github className="MySvg-icon" style={{ fill: '#000000' }} />
      </a>
      <a
        className={`social-block__link ${open ? 'social-link_open' : ''}`}
        href="https://hh.ru/resume/62f371a2ff0810d5600039ed1f48674e706c43"
        target="_blank"
        rel="noreferrer"
        aria-label="open resume on headhunter"
      >
        <div
          className="social-block__hh-icon"
          style={{ backgroundImage: `url(${HeadHunter.src})` }}
        />
      </a>
      {open ? <></> : <ResumeDownload short />}
    </div>
  );
}

SocialIconsBlock.propTypes = {
  open: PropTypes.bool.isRequired,
};
