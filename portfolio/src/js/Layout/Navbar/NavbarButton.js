import React from 'react';
import PropTypes from 'prop-types';

export default function NavbarButton(props) {
  const { title, href, status = false, children, classes } = props;

  return (
    <button type="button" className={`navbar-button button_isActive_${status} ${classes}`}>
      <a href={href} className={`MyTypography MyTypography-button ${classes}-link`}>
        {children}
        {title}
      </a>
    </button>
  );
}

NavbarButton.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  status: PropTypes.bool.isRequired,
  classes: PropTypes.string.isRequired,
};
