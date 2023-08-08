import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const styles = ({ theme }) => ({
  [` .icon_gradient`]: {
    background: theme.palette.secondary.gradientIcon,
    backgroundClip: 'text',
    webkitTextFillColor: 'transparent',
  },
  [`& .icon_main`]: {
    fill: theme.palette.secondary.main,
  },
  [`& .icon_dark`]: {
    fill: theme.palette.secondary.dark,
  },
  [` .button_isActive_true`]: {
    background: theme.palette.secondary.gradientBG,
    display: 'flex',
    padding: '0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '20px',
    ...theme.typography.button,
    color: theme.palette.secondary.contrastText,
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
