import React from 'react';
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

const techIcons = [
  { href: 'https://react.dev/', icon: <ReactIcon />, tooltip: 'React' },
  { href: 'https://mui.com/', icon: <MuiIcon />, tooltip: 'MUI' },
  { href: 'https://www.figma.com/', icon: <FigmaIcon />, tooltip: 'Figma' },
  { href: 'https://github.com/', icon: <GhIcon />, tooltip: 'GH-pages' },
  { href: 'https://stackoverflow.com/', icon: <StackIcon />, tooltip: 'Stack overflow' },
  { href: 'https://sass-lang.com/', icon: <SassIcon />, tooltip: 'Sass' },
  { href: 'https://fonts.google.com/', icon: <FontsIcon />, tooltip: 'Google Fonts' },
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
  return (
    <Box
      className="container-mainWrapper__footer footer-section border-radius-20"
      sx={{
        width: '100%',
        minHeight: '100px',
        backgroundColor: 'primary.paper',
        my: '20px',
        p: { xs: '30px', sm: '50px' },
      }}
    >
      <Typography variant="h6" align="center" sx={{ mb: { xs: '20px', sm: '50px' } }}>
        <Link
          className="footer-section__light-link"
          href="https://www.figma.com/community/file/1264680769254941322/Portfolio-Design"
          sx={{ color: 'secondary.main', mr: '10px' }}
        >
          Portfolio template
        </Link>
        is designed by
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
          This website was built with:
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
