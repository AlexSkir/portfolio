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
  [`.lang-switcher__wrapper`]: {
    backgroundColor: theme.palette.primary.accent,
  },
  [`.contact__contact-item`]: {
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary.main : '',
    [theme.breakpoints.down('sm')]: {
      backgroundColor: 'unset',
    },
  },
  [` 
  .resume-section__resume-item, 
  .about-section__activity-item, 
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
  '.navbar-block__bottom-btns-wrapper': {
    backgroundColor: theme.palette.primary.paper,
    '& .navbar-block__bottom-btn-link': {
      color: theme.palette.primary.contrastText,
    },
  },
  '.navbar-block__top-btn': {
    backgroundColor: theme.palette.primary.accent,
    '& .navbar-block__top-btn-link': {
      color: theme.palette.primary.contrastText,
    },
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
    '& .navbar-block__bottom-btn-link, .navbar-block__top-btn-link, .download__btn': {
      color: theme.palette.secondary.contrastText,
    },
    '& svg': {
      opacity: '100%',
    },
  },
  '.social-block__link': {
    backgroundColor: 'unset',
  },
  '.social-block__link.social-link_open': {
    backgroundColor: theme.palette.primary.light,
  },
  '.container-mainWrapper__content-wrapper': {
    backgroundColor: theme.palette.primary.paper,
  },
  '.side-block__avatar': {
    backgroundColor: theme.palette.secondary.main,
  },
  '.side-block__contact-card': {
    backgroundColor: theme.palette.primary.main,
  },
  '.secondary_main': {
    fill: theme.palette.secondary.main,
  },
  '.secondary_dark': {
    fill: theme.palette.secondary.dark,
  },
  [` .page-content__divider`]: {
    width: '252px',
    height: '2px',
    background: theme.palette.secondary.gradientBG,
  },
  [`.container-mainWrapper__footer.footer-section`]: {
    backgroundColor: theme.palette.primary.paper,
  },
  [` .footer-section__light-link`]: {
    color: theme.palette.secondary.main,
    textDecorationColor: theme.palette.secondary.main,
    '&:hover': {
      opacity: '0.7',
    },
  },
  [` .footer-section__dark-link`]: {
    color: theme.palette.secondary.dark,
    textDecorationColor: theme.palette.secondary.dark,
    '&:hover': {
      opacity: '0.7',
    },
  },
  [` .footer-section__tech-link`]: {
    backgroundColor: theme.palette.primary.main,
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
