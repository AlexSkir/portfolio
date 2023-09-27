'use client';

import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@mui/material/Tooltip';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from '../../../i18n/client';

import ShareBar from '../common/Share';

import ReactIcon from '../../../../assets/images/svg/react.svg';
import MuiIcon from '../../../../assets/images/svg/mui.svg';
import FigmaIcon from '../../../../assets/images/svg/figma.svg';
import GhIcon from '../../../../assets/images/svg/gh-pages.svg';
import StackIcon from '../../../../assets/images/svg/stack.svg';
import SassIcon from '../../../../assets/images/svg/sass.svg';
import FontsIcon from '../../../../assets/images/svg/fonts.svg';
import I18nIcon from '../../../../assets/images/svg/i18n.svg';
import EmailJs from '../../../../assets/images/svg/emailJs.svg';
import Recaptcha from '../../../../assets/images/svg/recaptcha.svg';
import Npm from '../../../../assets/images/svg/npm.svg';
import Render from '../../../../assets/images/icons/render.png';

import Typography from '../theme/Typography';

const techIcons = [
  { href: 'https://react.dev/', icon: <ReactIcon />, tooltip: 'React' },
  { href: 'https://mui.com/', icon: <MuiIcon />, tooltip: 'Material-UI Design System' },
  { href: 'https://www.figma.com/', icon: <FigmaIcon />, tooltip: 'Figma' },
  { href: 'https://github.com/', icon: <GhIcon />, tooltip: 'Github' },
  { href: 'https://stackoverflow.com/', icon: <StackIcon />, tooltip: 'Stack overflow' },
  { href: 'https://sass-lang.com/', icon: <SassIcon />, tooltip: 'Sass' },
  { href: 'https://fonts.google.com/', icon: <FontsIcon />, tooltip: 'Google Fonts' },
  { href: 'https://www.i18next.com/', icon: <I18nIcon />, tooltip: 'i18n localization' },
  { href: 'https://dashboard.emailjs.com/', icon: <EmailJs />, tooltip: 'Email JS Service' },
  {
    href: 'https://www.google.com/recaptcha/about/',
    icon: <Recaptcha />,
    tooltip: "Google's reCAPTCHA",
  },
  { href: 'https://www.npmjs.com/', icon: <Npm />, tooltip: 'Node Package Manager' },
  {
    href: 'https://render.com/',
    icon: <Image src={Render} alt="Render.com" />,
    tooltip: 'Render (Cloud Application Hosting)',
  },
];

export default function Footer({ lng }) {
  const { t } = useTranslation(lng);
  return (
    <div className="container-mainWrapper__footer footer-section">
      <div className="footer__left-block">
        <Link href="/" className="footer-section__logo-link">
          <Typography variant="h1" classes="footer-section__logo">
            Alex
          </Typography>
          <Typography variant="h1" classes="footer-section__logo gradientText">
            Skir
          </Typography>
        </Link>

        <Typography classes="footer__ref-link" align="left" variant="h6">
          <a
            className="footer-section__light-link"
            href="https://www.figma.com/community/file/1264680769254941322/Portfolio-Design"
            rel="noreferrer"
            target="_blank"
          >
            {t('footer.link1')}
          </a>
          {t('footer.link2')}
          <a
            className="footer-section__dark-link"
            href="https://www.figma.com/@beatricewambui"
            rel="noreferrer"
            target="_blank"
          >
            Beatrice Wambui Mbugua
          </a>
        </Typography>
      </div>

      <div className="footer__right-block">
        <Typography variant="h6" align="right">
          {t('common.shareTitle')}
        </Typography>

        <ShareBar url={typeof window !== 'undefined' ? window.location.origin : ''} len={4} t={t} />
      </div>

      <div className="footer-section__techs-block">
        <Typography className="footer__tool-title" variant="h6" align="center">
          {t('footer.ref')}
        </Typography>
        <div className="footer-section__techs-wrapper">
          {techIcons.map((item, i) => (
            <Tooltip key={i} title={item.tooltip}>
              <a
                className="footer-section__tech-link"
                href={item.href}
                rel="noreferrer"
                target="_blank"
              >
                {item.icon}
              </a>
            </Tooltip>
          ))}
        </div>
      </div>
    </div>
  );
}

Footer.propTypes = {
  lng: PropTypes.string.isRequired,
};
