'use client';

import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@mui/material/Tooltip';
import Link from 'next/link';
import Image from 'next/image';

// import ShareBar from '../common/Share';

import ReactIcon from '../../assets/svg/react.svg';
import MuiIcon from '../../assets/svg/mui.svg';
import FigmaIcon from '../../assets/svg/figma.svg';
import GhIcon from '../../assets/svg/gh-pages.svg';
import StackIcon from '../../assets/svg/stack.svg';
import SassIcon from '../../assets/svg/sass.svg';
import FontsIcon from '../../assets/svg/fonts.svg';
import I18nIcon from '../../assets/svg/i18n.svg';
import EmailJs from '../../assets/svg/emailJs.svg';
import Recaptcha from '../../assets/svg/recaptcha.svg';
import Npm from '../../assets/svg/npm.svg';
import Render from '../../assets/icons/render.png';

import Typography from '../Typography';
import LoadingBlock from '../common/LoadingBlock';

const ShareBar = lazy(() => import('../common/Share'));

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

export default function Footer(props) {
  const { t } = props;
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
            {t.footer.link1}
          </a>
          {t.footer.link2}
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
          {t.common.shareTitle}
        </Typography>

        <Suspense fallback={<LoadingBlock width="350px" height="70px" />}>
          <ShareBar url="origin" len={4} />
        </Suspense>
      </div>

      <div className="footer-section__techs-block">
        <Typography className="footer__tool-title" variant="h6" align="center">
          {t.footer.ref}
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
  t: PropTypes.object.isRequired,
};
