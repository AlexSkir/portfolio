/* 
import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';

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
});

function CustomSection(props) {
  const { children, ...other } = props;

  return <div>{children}</div>;
}

CustomSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default styled(CustomSection)(styles);
 */
