'use client';

import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Link from 'next/link';

export default function NavbarButton(props) {
  const { title, href, status = false, children, classes } = props;

  return (
    <Button className={`navbar-button button_isActive_${status} ${classes}`} role="button">
      <Link href={href} className={`MyTypography MyTypography-button ${classes}-link`}>
        {children}
        {title}
      </Link>
    </Button>
  );
}

NavbarButton.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  status: PropTypes.bool.isRequired,
  classes: PropTypes.string.isRequired,
};
