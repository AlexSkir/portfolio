import * as React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';

export default function NavbarButton(props) {
  const { title, href, status, handleClick } = props;

  return (
    <Button
      href={href}
      className={`navbar-button isActive_${status}`}
      onClick={handleClick}
      sx={{ color: 'white' }}
    >
      {title}
    </Button>
  );
}

NavbarButton.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  status: PropTypes.bool,
};

NavbarButton.defaultProps = {
  status: false,
};
