import React from 'react';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { MyThemeSwitch } from '../common/ThemeSwitcher';
import LangSwitcher from './langSwitcher';

export default function Header() {
  return (
    <Box
      className="container-mainWrapper__header-section"
      sx={{
        position: 'relative',
        width: '100%',
        height: '104px',
        margin: '0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
    >
      <Link
        href="/Home"
        underline="none"
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: '42px',
          cursor: 'pointer',
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        <Typography variant="h1" component="h1" sx={{ mr: '10px' }}>
          Aleksandra
        </Typography>
        <Typography variant="h1" component="h1" className="gradientText">
          Skirnevskaia
        </Typography>
      </Link>

      <MyThemeSwitch />

      <LangSwitcher />
    </Box>
  );
}
