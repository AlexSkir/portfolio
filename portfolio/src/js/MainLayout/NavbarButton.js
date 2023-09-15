import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';

export default function NavbarButton(props) {
  const { title, href, status, handleClick, children, ...other } = props;

  return (
    <Button
      href={href}
      className={`navbar-button button_isActive_${status}`}
      onClick={handleClick}
      {...other}
      role="button"
    >
      {children}
      {title}
    </Button>
  );
}

NavbarButton.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  status: PropTypes.bool,
};

NavbarButton.defaultProps = {
  status: false,
};
