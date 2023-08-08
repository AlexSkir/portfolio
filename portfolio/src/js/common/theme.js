/* eslint-disable prettier/prettier */
import { createTheme } from '@mui/material/styles';
import { green, grey, red } from '@mui/material/colors';

const rawTheme = {
  palette: {
    secondary: {
      light: '#FFEBD1',
      main: '#FF9C1B',
      dark: '#EC1B09',
      gradient: 'linear-gradient(180deg, #FF9C1A 0%, #ED250A 100%)',
      gradientBG: 'linear-gradient(127deg, #FF9C1A 0%, #E80505 100%)',
      gradientIcon: 'linear-gradient(180deg, #FF9A1A 0%, #EC1C09 100%)',
      contrastText: '#F2F7FC',
      contrastTextActive: '#FFFFFF',
      contrastTextInactive: 'rgba(26, 16, 3, 0.5)',
    },
    warning: {
      light: '#ffdfba',
      main: '#ffa64c',
      dark: '#dd5831',
    },
    error: {
      light: red[50],
      main: red[500],
      dark: red[700],
    },
    success: {
      light: green[50],
      main: green[500],
      dark: green[700],
    },
  },
  typography: {
    body: {
      fontFamily: "'Raleway', san-serif",
      fontWeight: 400,
      color: 'black',
      fontSize: '14px',
    },
    header: {
      fontFamily: "'Poppins', san-serif",
      fontWeight: 500,
      color: 'black',
    },
    logo: {
      fontFamily: "'Pacifico', cursive",
      color: 'black',
      fontWeight: 400,
      fontSize: '24px',
    },
    button: {
      fontFamily: "'Raleway', san-serif",
      fontWeight: 600,
      color: 'black',
      fontSize: '12px',
      textTransform: 'initial',
    }
  },
};

const typography = {

  h1: {
    ...rawTheme.typography.logo,
    letterSpacing: 0,
    color: 'black',
  },
  h2: {
    color: rawTheme.typography.header,
    fontSize: 40,
  },
  h3: {
    ...rawTheme.typography.body,
    fontSize: 42,
  },
  h4: {
    ...rawTheme.typography.body,
    fontSize: 28,
    fontWeight: 700,
  },
  h5: {
    ...rawTheme.typography.body,
    fontSize: 20,
    fontWeight: 300,
  },
  h6: {
    ...rawTheme.typography.body,
    fontSize: 18,
  },
  subtitle1: {
    ...rawTheme.typography.body,
    fontSize: 18,
  },
  body1: {
    ...rawTheme.typography.body,
    fontSize: 14,
    fontWeight: 400,
  },
  body2: {
    ...rawTheme.typography.body,
    fontSize: 16,
    fontWeight: 500
  },
  body3: {
    ...rawTheme.typography.body,
    fontSize: 14,
    fontWeight: 600
  },
}

/* const themeModeEx = (mode) => ({
  palette: {
    mode,
    ...(mode === 'dark'
      ? {
        primary: {
          light: '#d2393a',
          main: '#000000',
          dark: '#333333',
        },
        ...palette,
      }
      : {
        primary: {
          light: 'white',
          main: '#1003c70',
          dark: 'gray',
        },
        ...palette,
      }),
  },
  typography: {
    fontFamily: "'Work Sans', sans-serif",
    fontSize: 14,
    fontWeightLight: 300, // Work Sans
    fontWeightRegular: 400, // Work Sans
    fontWeightMedium: 700, // Roboto Condensed
  },
}); */

export const darkTheme = {
  palette: {
    mode: 'dark',
    primary: {
      lighter: '#777777',
      light: '#444444',
      main: '#000000',
      dark: '#000000',
      contrastText: 'white',
    },
    ...rawTheme.palette,
    background: {
      ...rawTheme.palette.background,
      default: 'white',
      placeholder: grey[200],
    },
  },
  typography: {
    ...rawTheme.typography,
    ...typography,
  },
};

export const lightTheme = {
  palette: {
    mode: 'light',
    primary: {
      lighter: '#FFF',
      light: '#F2F7FC',
      main: '#F2F5F9',
      dark: '#E1E8EF',
      contrastText: 'black',
    },
    ...rawTheme.palette,
    background: {
      ...rawTheme.palette.background,
      default: 'white',
      placeholder: grey[200],
    },
  },
  typography: {
    ...rawTheme.typography,
    ...typography,
  },
}

