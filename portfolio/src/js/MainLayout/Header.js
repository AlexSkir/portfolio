import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { MyThemeSwitch } from '../common/ThemeSwitcher';
import LangSwitcher from './langSwitcher';

export default function Header() {
  const { t } = useTranslation();
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
        href="/"
        underline="none"
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: '42px',
          cursor: 'pointer',
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          sx={{ mr: '10px', display: 'flex', alignItems: 'center', height: '100%' }}
        >
          {t('header.name')}
        </Typography>
        <Typography
          variant="h1"
          component="h1"
          className="gradientText"
          sx={{ display: 'flex', alignItems: 'center', height: '100%' }}
        >
          {t('header.name2')}
        </Typography>
      </Link>

      <MyThemeSwitch />

      <LangSwitcher />
    </Box>
  );
}
