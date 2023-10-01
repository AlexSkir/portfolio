'use client';

import React from 'react';
import { useCookies } from 'react-cookie';
import Tooltip from '@mui/material/Tooltip';
import DarkMode from '../../assets/svg/Dark-mode.svg';
import LightMode from '../../assets/svg/Light-mode.svg';

export default function MyThemeSwitch(t) {
  const [cookies, setCookie] = useCookies(['myColorMode']);
  const defaultTheme = typeof window !== 'undefined' ? document.body.className : 'light';

  const [mode, setMode] = React.useState(defaultTheme);

  const toggleColorMode = () => {
    setMode((prevMode) => {
      let newMode;
      if (prevMode === 'light') {
        newMode = 'dark';
      } else {
        newMode = 'light';
      }
      setCookie('myColorMode', newMode, { path: '/' });
      document.body.className = newMode;
      return newMode;
    });
  };

  return (
    <div className="theme-switcher-wrapper">
      {mode === 'dark' ? (
        <Tooltip title={`t('header.darkTheme')`}>
          <button
            type="button"
            className="theme-switch__icon-btn"
            onClick={toggleColorMode}
            aria-label={`t('common.themeswitch')`}
          >
            <LightMode className="MySvg-icon" />
          </button>
        </Tooltip>
      ) : (
        <Tooltip title={`t('header.darkTheme')`}>
          <button
            type="button"
            className="theme-switch__icon-btn"
            onClick={toggleColorMode}
            aria-label={`t('common.themeswitch')`}
          >
            <DarkMode className="MySvg-icon" />
          </button>
        </Tooltip>
      )}
    </div>
  );
}
