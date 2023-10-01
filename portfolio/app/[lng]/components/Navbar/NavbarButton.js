import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

export default function NavbarButton(props) {
  const { title, href, status = false, children, classes } = props;

  return (
    <button type="button" className={`navbar-button button_isActive_${status} ${classes}`}>
      <Link href={href} className={`MyTypography MyTypography-button ${classes}-link`}>
        {children}
        {title}
      </Link>
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
