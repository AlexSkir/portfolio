'use client';

import React from 'react';
import PropTypes from 'prop-types';
import { usePathname } from 'next/navigation';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import Tooltip from '@mui/material/Tooltip';
import Lang from '../../assets/svg/Lang.svg';
import Typography from '../Typography';

export default function LangSwitcher(props) {
  const { t } = props;
  const pathname = usePathname();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
  };

  return (
    <>
      <button
        className="lang-switcher__button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        type="button"
        aria-label={t.common.langswitch}
      >
        <Lang className="MySvg-icon" />
      </button>
      <Menu
        className="lang-switcher__menu"
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        aria-labelledby="basic-button"
      >
        <Link
          className="lang-switcher__link"
          href={pathname.indexOf('/ru') > -1 ? pathname.replace('/ru', '/en') : pathname}
        >
          <MenuItem className="lang-switcher__menu-item" value="en" onClick={handleClose}>
            <Typography>English</Typography>
          </MenuItem>
        </Link>
        <Link
          className="lang-switcher__link"
          href={pathname.indexOf('/en') > -1 ? pathname.replace('/en', '/ru') : pathname}
        >
          <MenuItem className="lang-switcher__menu-item" value="ru" onClick={handleClose}>
            <Typography>Русский</Typography>
          </MenuItem>
        </Link>
      </Menu>
    </>
  );
}

LangSwitcher.propTypes = {
  t: PropTypes.object.isRequired,
};
