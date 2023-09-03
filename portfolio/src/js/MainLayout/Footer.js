import React from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import ReactIcon from '../../assets/images/react.svg';
import MuiIcon from '../../assets/images/mui.svg';
import FigmaIcon from '../../assets/images/figma.svg';
import GhIcon from '../../assets/images/gh-pages.svg';
import StackIcon from '../../assets/images/stack.svg';
import SassIcon from '../../assets/images/sass.svg';
import FontsIcon from '../../assets/images/fonts.svg';
import I18nIcon from '../../assets/images/i18n.svg';
import EmailJs from '../../assets/images/emailJs.svg';

const techIcons = [
  { href: 'https://react.dev/', icon: <ReactIcon />, tooltip: 'React' },
  { href: 'https://mui.com/', icon: <MuiIcon />, tooltip: 'MUI' },
  { href: 'https://www.figma.com/', icon: <FigmaIcon />, tooltip: 'Figma' },
  { href: 'https://github.com/', icon: <GhIcon />, tooltip: 'GH-pages' },
  { href: 'https://stackoverflow.com/', icon: <StackIcon />, tooltip: 'Stack overflow' },
  { href: 'https://sass-lang.com/', icon: <SassIcon />, tooltip: 'Sass' },
  { href: 'https://fonts.google.com/', icon: <FontsIcon />, tooltip: 'Google Fonts' },
  { href: 'https://www.i18next.com/', icon: <I18nIcon />, tooltip: 'i18n localization' },
  { href: 'https://dashboard.emailjs.com/', icon: <EmailJs />, tooltip: 'Email JS Service' },
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
  '& svg': {
    width: '70%',
    height: '70%',
  },
};

export default function Footer() {
  const { t } = useTranslation();
  return (
    <Box
      className="container-mainWrapper__footer footer-section"
      sx={{
        width: '100%',
        minHeight: '100px',
        backgroundColor: 'primary.paper',
        mt: '20px',
        mb: { xs: '70px', sm: '20px' },
        p: { xs: '30px', sm: '50px' },
        borderRadius: { xs: '8px', sm: '20px' },
      }}
    >
      <Typography variant="h6" align="center" sx={{ mb: { xs: '20px', sm: '50px' } }}>
        <Link
          className="footer-section__light-link"
          href="https://www.figma.com/community/file/1264680769254941322/Portfolio-Design"
          sx={{ color: 'secondary.main', mr: '10px' }}
        >
          {t('footer.link1')}
        </Link>
        {t('footer.link2')}
        <Link
          className="footer-section__dark-link"
          href="https://www.figma.com/@beatricewambui"
          sx={{ color: 'secondary.dark', ml: '10px' }}
        >
          Beatrice Wambui Mbugua
        </Link>
      </Typography>

      <Box>
        <Typography variant="h6" align="center">
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
              <Link sx={iconWrapper} href={item.href}>
                {item.icon}
              </Link>
            </Tooltip>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
