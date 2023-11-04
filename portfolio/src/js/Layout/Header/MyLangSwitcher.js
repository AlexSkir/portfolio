import React from 'react';
import { useTranslation } from 'react-i18next';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import Lang from '../../../assets/svg/Lang.svg';
import Typography from '../../common/Typography';

export default function LangSwitcher() {
  const { i18n, t } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    i18n.changeLanguage(event.currentTarget.getAttribute('value'));
    setAnchorEl(null);
  };

  return (
    <div className="lang-switcher__wrapper">
      <Tooltip title={t('header.langTooltip')}>
        <button
          className="lang-switcher__button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          type="button"
          aria-label={t('common.langswitch')}
        >
          <Lang className="MySvg-icon" />
        </button>
      </Tooltip>
      <Menu
        className="lang-switcher__menu"
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        aria-labelledby="basic-button"
      >
        <MenuItem className="lang-switcher__menu-item" value="en" onClick={handleClose}>
          <Typography>English</Typography>
        </MenuItem>
        <MenuItem className="lang-switcher__menu-item" value="ru" onClick={handleClose}>
          <Typography>Русский</Typography>
        </MenuItem>
      </Menu>
    </div>
  );
}
