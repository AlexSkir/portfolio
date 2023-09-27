'use client';

import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LanguageIcon from '@mui/icons-material/Language';
import Link from 'next/link';
import Tooltip from '@mui/material/Tooltip';
import Typography from '../theme/Typography';

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
    <div className="lang-switcher__wrapper">
      <Tooltip title={t('header.langTooltip')}>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{ color: 'primary.contrastText', height: '100%' }}
          role="button"
          aria-label={t('common.langswitch')}
        >
          <LanguageIcon />
        </Button>
      </Tooltip>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Link
          className="lang-switcher__link"
          href={pathname.indexOf('/ru') > -1 ? pathname.replace('/ru', '/en') : pathname}
        >
          <MenuItem value="en" onClick={handleClose} sx={{ color: 'primary.contrastText' }}>
            <Typography>English</Typography>
          </MenuItem>
        </Link>
        <Link
          className="lang-switcher__link"
          href={pathname.indexOf('/en') > -1 ? pathname.replace('/en', '/ru') : pathname}
        >
          <MenuItem value="ru" onClick={handleClose} sx={{ color: 'primary.contrastText' }}>
            <Typography>Русский</Typography>
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

LangSwitcher.propTypes = {
  pathname: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
};
