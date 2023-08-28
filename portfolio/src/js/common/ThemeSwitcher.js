/* eslint-disable max-len */
import React from 'react';
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { lightTheme, darkTheme } from './theme';

import CustomSection from './CustomSection';

// eslint-disable-next-line prettier/prettier
const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

const switchWrapper = {
  position: 'absolute',
  top: '25px',
  right: '0',
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

export function MyThemeSwitch() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box className="theme-switch-section" sx={switchWrapper}>
      <IconButton sx={{ m: 0, p: '20px' }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <LightModeOutlinedIcon /> : <BedtimeOutlinedIcon />}
      </IconButton>
    </Box>
  );
}

export function ThemeSwitcher(Component) {
  function ThemeSwitcher(props) {
    let defaultTheme = 'light';
    if (localStorage && localStorage.getItem('myColorMode')) {
      defaultTheme = localStorage.getItem('myColorMode');
    }

    const [mode, setMode] = React.useState(defaultTheme);
    const colorMode = React.useMemo(
      () => ({
        toggleColorMode: () => {
          setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        },
      }),
      [],
    );
    if (localStorage) {
      localStorage.setItem('myColorMode', mode);
    }
    const theme = React.useMemo(() => createTheme(mode === 'dark' ? darkTheme : lightTheme), [
      mode,
    ]);

    return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CustomSection
            className="app_appContainer"
            sx={{ width: '100%', minHeight: '100vh', p: 0, m: 0, backgroundColor: 'primary.main' }}
          >
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Component {...props} />
          </CustomSection>
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
  }

  return ThemeSwitcher;
}
