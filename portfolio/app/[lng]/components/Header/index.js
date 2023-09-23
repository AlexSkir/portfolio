'use client';

import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTranslation } from '../../../i18n/client';
import { languages } from '../../../i18n/settings';

// import Link from '@mui/material/Link';
import { MyThemeSwitch } from '../theme/ThemeSwitcher';
import LangSwitcher from './langSwitcher';

export function Header({ lng }) {
  const { t } = useTranslation(lng);
  const pathname = usePathname();

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

      <MyThemeSwitch t={t} />

      <LangSwitcher pathname={pathname} lng={lng} t={t} />
    </Box>
  );
}

Header.propTypes = {
  lng: PropTypes.string.isRequired,
};
