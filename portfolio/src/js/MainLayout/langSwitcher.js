import React from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LanguageIcon from '@mui/icons-material/Language';
import MyRedirect from '../common/MyRedirect';

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
  const { i18n, t } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const lang = i18n.resolvedLanguage;
  const { protocol, host, pathname } = window.location;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    const clickLang = event.target.getAttribute('value');
    const locales = ['en', 'ru'];

    const sameLang = host.indexOf(`${clickLang}.`) > -1;
    const anyLocale = locales.some((locale) => host.indexOf(`${locale}.`) > -1);

    if (anyLocale) {
      // console.log('there are locales');
      if (sameLang) {
        // console.log('same lang');
      } else {
        // console.log(`url has other locale, must redirect to new lang: ${clickLang}`);
        const hostArr = host.split('.');
        // window.location = `${protocol}//${clickLang}.${hostArr[1]}${pathname}`;
      }
    } else {
      // window.location = `${protocol}//${lang}.${host}${pathname}`;
      <MyRedirect url={`${protocol}//${lang}.${host}${pathname}`} />;
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
