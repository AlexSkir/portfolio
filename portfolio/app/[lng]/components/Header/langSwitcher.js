'use client';

import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LanguageIcon from '@mui/icons-material/Language';
import Link from 'next/link';
import { languages } from '../../../i18n/settings';

const langWrapper = {
  position: 'absolute',
  top: '25px',
  right: '100px',
  zIndex: '100',
  width: '56px',
  height: '56px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'primary.accent',
  borderRadius: '50%',
  boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
};

export default function LangSwitcher({ pathname, t }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
  };

  return (
    <Box className="lang-switcher" sx={langWrapper}>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ color: 'primary.contrastText' }}
        role="button"
        aria-label={t('common.langswitch')}
      >
        <LanguageIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem value="en" onClick={handleClose}>
          <Link href={pathname.indexOf('/ru') > -1 ? pathname.replace('/ru', '/en') : pathname}>
            English
          </Link>
        </MenuItem>
        <MenuItem value="ru" onClick={handleClose}>
          <Link href={pathname.indexOf('/en') > -1 ? pathname.replace('/en', '/ru') : pathname}>
            Русский
          </Link>
        </MenuItem>
      </Menu>
    </Box>
  );
}

LangSwitcher.propTypes = {
  pathname: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
};
