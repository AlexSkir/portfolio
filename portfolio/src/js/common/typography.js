/* eslint-disable react/require-default-props */
import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import MuiTypography from '@mui/material/Typography';

const markClassesMapping = {
  center: {
    h1: 'AlexSkir-markedH1Center',
    h2: 'AlexSkir-markedH2Center',
    h3: 'AlexSkir-markedH3Center',
    h4: 'AlexSkir-markedH4Center',
    h5: '',
    h6: '',
  },
  left: {
    h1: '',
    h2: '',
    h3: '',
    h4: '',
    h5: '',
    h6: 'AlexSkir-markedH6Left',
  },
  none: {
    h1: 'AlexSkir-notMarkedH1Center',
    h2: '',
    h3: '',
    h4: '',
    h5: '',
    h6: '',
  },
};

const styles = ({ theme }) => ({
  [`& .${markClassesMapping.center.h1}`]: {
    height: 50,
    width: 180,
    display: 'block',
    margin: `${theme.spacing(1)} auto 0`,
    backgroundColor: 'inherit',
  },
  [`& .${markClassesMapping.center.h2}`]: {
    height: 4,
    width: 73,
    display: 'block',
    margin: `${theme.spacing(1)} auto 0`,
    backgroundColor: theme.palette.secondary.main,
  },
  [`& .${markClassesMapping.center.h3}`]: {
    height: 4,
    width: 55,
    display: 'block',
    margin: `${theme.spacing(1)} auto 0`,
    backgroundColor: theme.palette.secondary.main,
  },
  [`& .${markClassesMapping.center.h4}`]: {
    height: 4,
    width: 55,
    display: 'block',
    margin: `${theme.spacing(1)} auto 0`,
    backgroundColor: theme.palette.secondary.main,
  },
  [`& .${markClassesMapping.left.h6}`]: {
    height: 2,
    width: 28,
    display: 'block',
    marginTop: theme.spacing(0.5),
    background: 'currentColor',
  },
  [`&.gradientText`]: {
    background: theme.palette.secondary.gradient,
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
});

const variantMapping = {
  h1: 'h1',
  h2: 'h1',
  h3: 'h1',
  h4: 'h1',
  h5: 'h3',
  h6: 'h2',
  subtitle1: 'h3',
  body1: 'span',
  body2: 'span',
};

function Typography(props) {
  const { children, variant, marked = 'none', ...other } = props;

  let markedClassName = '';
  if (variant && variant in markClassesMapping[marked]) {
    markedClassName = markClassesMapping[marked][variant];
  }

  return (
    <MuiTypography variantMapping={variantMapping} variant={variant} {...other}>
      {children}
      {markedClassName ? <span className={markedClassName} /> : null}
    </MuiTypography>
  );
}

Typography.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  marked: PropTypes.oneOf(['center', 'left', 'none']),
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: PropTypes.oneOf([
    'body1',
    'body2',
    'body3',
    'button',
    'caption',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'inherit',
    'overline',
    'subtitle1',
    'subtitle2',
  ]),
};

export default styled(Typography)(styles);
