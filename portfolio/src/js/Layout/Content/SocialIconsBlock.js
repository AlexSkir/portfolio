import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import LoadingBlock from '../../common/LoadingBlock';
import HeadHunter from '../../../assets/icons/Hh.png';

const Email = lazy(() => import('../../../assets/svg/Email.svg'));
const Github = lazy(() => import('../../../assets/svg/Gh-pages.svg'));
const Telegram = lazy(() => import('../../../assets/svg/Telegram.svg'));
const Whatsapp = lazy(() => import('../../../assets/svg/Whatsapp.svg'));
const PhoneIcon = lazy(() => import('../../common/iconsJs/PhoneIconGradient'));
const ResumeDownload = lazy(() => import('../../common/ResumeDownload'));

export default function SocialIconsBlock(props) {
  const { open } = props;
  console.log(HeadHunter);

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
        <Suspense fallback={<LoadingBlock width="70px" height="70px" marginRight="9px" />}>
          <a
            className="social-block__link"
            href="tel:+79938996716"
            target="_blank"
            rel="noreferrer"
            aria-label="dial +79938996716"
          >
            <PhoneIcon main="var(--secondary-main)" dark="var(--secondary-dark)" />
          </a>
        </Suspense>
      )}
      {open ? (
        <></>
      ) : (
        <Suspense fallback={<LoadingBlock width="70px" height="70px" marginRight="9px" />}>
          <a
            className="social-block__link"
            href="mailto:a.skirnevskaia@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="mail to a.skirnevskaia@gmail.com"
          >
            <Email className="MySvg-icon secondary_dark" />
          </a>
        </Suspense>
      )}
      <Suspense fallback={<LoadingBlock width="70px" height="70px" marginRight="9px" />}>
        <a
          className={`social-block__link ${open ? 'social-link_open' : ''}`}
          href="https://wa.me/+79938996716"
          target="_blank"
          rel="noreferrer"
          aria-label="message +79938996716 in whatsapp"
        >
          <Whatsapp className="MySvg-icon" style={{ fill: '#25D366' }} />
        </a>
      </Suspense>
      <Suspense fallback={<LoadingBlock width="70px" height="70px" marginRight="9px" />}>
        <a
          className={`social-block__link ${open ? 'social-link_open' : ''}`}
          href="https://t.me/alexskir"
          target="_blank"
          rel="noreferrer"
          aria-label="message to alexskir in telegram"
        >
          <Telegram className="MySvg-icon" style={{ fill: '#229ED9' }} />
        </a>
      </Suspense>
      <Suspense fallback={<LoadingBlock width="70px" height="70px" marginRight="9px" />}>
        <a
          className={`social-block__link ${open ? 'social-link_open' : ''}`}
          href="https://github.com/AlexSkir"
          target="_blank"
          rel="noreferrer"
          aria-label="open alexskir github profile in new tab"
        >
          <Github className="MySvg-icon" style={{ fill: '#000000' }} />
        </a>
      </Suspense>
      <Suspense fallback={<LoadingBlock width="70px" height="70px" marginRight="9px" />}>
        <a
          className={`social-block__link ${open ? 'social-link_open' : ''}`}
          href="https://hh.ru/resume/62f371a2ff0810d5600039ed1f48674e706c43"
          target="_blank"
          rel="noreferrer"
          aria-label="open resume on headhunter"
        >
          <div
            className="social-block__hh-icon"
            style={{ backgroundImage: `url(${HeadHunter})` }}
          />
        </a>
      </Suspense>
      {open ? (
        <></>
      ) : (
        <Suspense fallback={<LoadingBlock width="70px" height="70px" marginRight="9px" />}>
          <ResumeDownload short />
        </Suspense>
      )}
    </div>
  );
}

SocialIconsBlock.propTypes = {
  open: PropTypes.bool.isRequired,
};
