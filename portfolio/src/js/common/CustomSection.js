/* eslint-disable max-len */
import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const styles = ({ theme }) => ({
  [theme.breakpoints.down('lg')]: {
    h2: {
      fontSize: '32px',
    },
    h3: {
      fontSize: '28px',
    },
    h5: {
      fontSize: '20px',
    },
  },
  [theme.breakpoints.down('sm')]: {
    '.MuiTypography-root': {
      textAlign: 'justify',
    },
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
    ' .MuiTypography-body2': {
      fontSize: '14px',
      lineHeight: '20px',
    },
    [` .homepage-section__activity-icon, 
    .homepage-section__activity-icon.activity-icon_dark`]: {
      fill: theme.palette.secondary.main,
    },
  },
  [` 
  .resume-section__resume-item, 
  .about-section__activity-item, 
  .contact__contact-item, 
  .projects-list__item-wrapper `]: {
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
  [` .gradientText`]: {
    background: theme.palette.secondary.gradient,
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  [` .navbar-block`]: {
    boxShadow: `0px 0px 4px 0px ${theme.palette.primary.accent}`,
  },
  [` .navbar-button`]: {
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
  [` .MuiInputLabel-root`]: {
    color: theme.palette.primary.contrastText,
    fontSize: '16px',
    fontWeight: '600',

    [`&.Mui-focused`]: {
      color: theme.palette.primary.contrastText,
      fontSize: '16px',
    },
  },
  [` #formText`]: {
    resize: 'vertical',
  },
  [` .homepage-section__activity-icon`]: {
    width: '24px',
    height: '24px',
  },
  [` .activity-icon_main`]: {
    fill: theme.palette.secondary.main,
  },
  [` .activity-icon_dark`]: {
    fill: theme.palette.secondary.dark,
  },
  '.scroll-to-top-btn': {
    background: theme.palette.secondary.gradientBG,
    borderRadius: '30px',
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
