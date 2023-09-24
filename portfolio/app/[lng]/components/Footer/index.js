'use client';

import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
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

const iconWrapper = {
  width: { xs: '40px', sm: '50px' },
  height: { xs: '40px', sm: '50px' },
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '8px',
  backgroundColor: 'primary.main',
  m: { xs: '10px', sm: '20px' },
  '& svg, img': {
    width: '70%',
    height: '70%',
  },
};

export default function Footer({ lng }) {
  const { t } = useTranslation(lng);
  return (
    <Box
      className="container-mainWrapper__footer footer-section"
      sx={{
        width: '100%',
        minHeight: '100px',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        backgroundColor: 'primary.paper',
        mt: '20px',
        mb: { xs: '70px', sm: '20px' },
        p: { xs: '30px', sm: '50px' },
        borderRadius: { xs: '8px', sm: '20px' },
      }}
    >
      <Box
        className="footer__left-block"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          width: { xs: '100%', sm: '48%' },
          '& .footer__ref-link': { textAlign: { xs: 'center', sm: 'left' } },
        }}
      >
        <Link
          href="/"
          underline="none"
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: '42px',
            cursor: 'pointer',
            flexDirection: 'row',
          }}
        >
          <Typography variant="h1" component="h1" sx={{ height: '100%' }}>
            Alex
          </Typography>
          <Typography variant="h1" component="h1" className="gradientText" sx={{ height: '100%' }}>
            Skir
          </Typography>
        </Link>

        <Typography
          className="footer__ref-link"
          align="left"
          variant="h6"
          sx={{ mb: { xs: '20px', sm: '50px' } }}
        >
          <Link
            className="footer-section__light-link"
            href="https://www.figma.com/community/file/1264680769254941322/Portfolio-Design"
            sx={{ color: 'secondary.main', mr: '10px' }}
            target="_blank"
          >
            {t('footer.link1')}
          </Link>
          {t('footer.link2')}
          <Link
            className="footer-section__dark-link"
            href="https://www.figma.com/@beatricewambui"
            sx={{ color: 'secondary.dark', ml: '10px' }}
            target="_blank"
          >
            Beatrice Wambui Mbugua
          </Link>
        </Typography>
      </Box>

      <Box
        className="footer__right-block"
        sx={{
          width: { xs: '100%', sm: '48%' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center', sm: 'flex-end' },
          mb: '50px',
        }}
      >
        <Typography variant="h6" align="right">
          {t('common.shareTitle')}
        </Typography>

        <ShareBar url={typeof window !== 'undefined' ? window.location.origin : ''} len={4} t={t} />
      </Box>

      <Box sx={{ width: '100%', '& .footer__tool-title': { textAlign: 'center' } }}>
        <Typography className="footer__tool-title" variant="h6" align="center">
          {t('footer.ref')}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {techIcons.map((item, i) => (
            <Tooltip key={i} title={item.tooltip}>
              <Link sx={iconWrapper} href={item.href} target="_blank">
                {item.icon}
              </Link>
            </Tooltip>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

Footer.propTypes = {
  lng: PropTypes.string.isRequired,
};
