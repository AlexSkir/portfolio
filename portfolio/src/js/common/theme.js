/* eslint-disable prettier/prettier */
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
      pinkBox: '#FFEBD1',
      blueBox: '#F2F7FC',
      textBox: '#000000',
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
    fontFamily: [
      '"Raleway"', '"Poppins"', '"Pacifico"', 'san-serif'
    ].join(','),
    body: {
      fontFamily: "'Raleway', san-serif",
      fontWeight: 400,
      fontSize: '14px',
    },
    header: {
      fontFamily: "'Poppins', san-serif",
      fontWeight: 500,
    },
    logo: {
      fontFamily: "'Pacifico', cursive",
      fontWeight: 400,
      fontSize: '24px',
    },
    button: {
      fontFamily: "'Raleway', san-serif",
      fontWeight: 600,
      fontSize: '12px',
      textTransform: 'initial',
    }
  },
};

const typography = {

  h1: {
    ...rawTheme.typography.logo,
    letterSpacing: 0,
  },
  h2: {
    ...rawTheme.typography.header,
    fontSize: 40,
  },
  h3: {
    ...rawTheme.typography.header,
    fontSize: '32px',
    fontWeight: 500,
    lineHeight: '40px',
  },
  h4: {
    ...rawTheme.typography.body,
    fontSize: 28,
    fontWeight: 700,
  },
  h5: {
    ...rawTheme.typography.header,
    fontSize: 24,
    fontWeight: 600,
  },
  h6: {
    ...rawTheme.typography.body,
    fontSize: 20,
    fontWeight: 600,
  },
  subtitle1: {
    ...rawTheme.typography.header,
    fontSize: 28,
    fontWeight: 500,
    letterSpacing: '0.693px',
  },
  subtitle2: {
    ...rawTheme.typography.header,
    fontSize: 16,
    fontWeight: 500,
    letterSpacing: '0px',
  },
  body1: {
    ...rawTheme.typography.body,
    fontSize: 14,
    fontWeight: 400,
    lineHeight: '20px',
    letterSpacing: '0.35px',
  },
  body2: {
    ...rawTheme.typography.body,
    fontSize: 16,
    fontWeight: 500,
    lineHeight: '30px',
  },
  body3: {
    ...rawTheme.typography.body,
    fontSize: 14,
    fontWeight: 600
  },
}

export const darkTheme = {
  palette: {
    mode: 'dark',
    primary: {
      paper: '#444444',
      light: '#232323',
      main: '#232323',
      accent: '#333333',
      contrastText: '#e1e3e6',
      background: 'rgb(35 35 35 / 30%)',
      paleText: 'rgb(255 255 255 / 80%)',
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
      paper: '#FFF',
      light: '#F2F7FC',
      main: '#F2F5F9',
      accent: '#E1E8EF',
      contrastText: 'black',
      background: 'rgb(242 245 249 / 30%)',
      paleText: 'rgb(23 23 23 / 80%)',
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

