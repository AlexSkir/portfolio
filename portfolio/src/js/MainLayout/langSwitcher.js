import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LanguageIcon from '@mui/icons-material/Language';
import { checkLocale } from '../common/MyRedirect';

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

export default function LangSwitcher() {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    const clickLang = event.target.getAttribute('value');
    const mustRedirect = checkLocale(pathname, clickLang);
    if (mustRedirect) {
      const { locale, lang } = mustRedirect;
      const newPathname = pathname.replace(`/${locale}`, `/${lang}`);
      navigate(newPathname, { replace: true });
    }
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
          English
        </MenuItem>
        <MenuItem value="ru" onClick={handleClose}>
          Русский
        </MenuItem>
      </Menu>
    </Box>
  );
}
