/* eslint-disable max-len */
import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const styles = ({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    h1: {
      fontSize: '16px',
    },
    h2: {
      fontSize: '28px',
    },
    h3: {
      fontSize: '24px',
    },
    h4: {
      fontSize: '20px',
    },
    h5: {
      fontSize: '18px',
    },
    h6: {
      fontSize: '14px',
    },
  },
  [` .about-section__activity-item`]: {
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary.main : '',
  },
  [` .resume-section__resume-item`]: {
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary.main : '',
  },
  [` .resume-section__link`]: {
    textDecorationColor: theme.palette.primary.contrastText,
    '&:hover': {
      opacity: '0.8',
    },
  },
  [` div, h1`]: {
    color: theme.palette.primary.contrastText,
  },
  [` .border-radius-20`]: {
    borderRadius: '20px',
  },
  [` .border-radius-8`]: {
    borderRadius: '8px',
  },
  [` .gradientText`]: {
    background: theme.palette.secondary.gradient,
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  [` .navbar-block`]: {
    boxShadow: `0px 0px 4px 0px ${theme.palette.primary.accent}`,
  },
  [` .navbar-button`]: {
    width: '80px',
    height: '80px',
    background: theme.palette.primary.accent,
    ...theme.typography.button,
    color: theme.palette.primary.contrastText,
    borderRadius: '20px',
    flexDirection: 'column',
    '& svg': {
      opacity: '50%',
    },
    '&:hover': {
      backgroundColor: 'none',
      boxShadow: `0px 0px 4px 0px ${theme.palette.primary.accent}`,
    },
  },
  [` .button_isActive_true`]: {
    background: theme.palette.secondary.gradientBG,
    color: theme.palette.secondary.contrastText,
    '& svg': {
      opacity: '100%',
    },
  },
  [` .page-content__divider`]: {
    width: '252px',
    height: '2px',
    background: theme.palette.secondary.gradientBG,
  },
  [` .footer-section__light-link`]: {
    textDecorationColor: theme.palette.secondary.main,
    '&:hover': {
      opacity: '0.7',
    },
  },
  [` .footer-section__dark-link`]: {
    textDecorationColor: theme.palette.secondary.dark,
    '&:hover': {
      opacity: '0.7',
    },
  },
  ' .projects-list__item-wrapper': {
    backgroundColor: '#FFF4E5',
  },
  [` .MuiImageListItemBar-title`]: {
    fontFamily: 'Poppins',
    fontSize: '10px',
    fontWeight: '400',
    color: 'rgba(26, 16, 3, 0.50)',
  },
  [` .MuiImageListItemBar-subtitle`]: {
    fontFamily: 'Poppins',
    fontSize: '16px',
    fontWeight: '400',
    color: '#1A1003',
    whiteSpace: 'wrap',
  },
});

function CustomSection(props) {
  const { children, ...other } = props;

  return <Box {...other}>{children}</Box>;
}

CustomSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default styled(CustomSection)(styles);
