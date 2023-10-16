'use client';

import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

export default function MobileLink(props) {
  const { children } = props;
  const { protocol, host, pathname, href } = window.location;

  const mobUrl =
    host.indexOf('m.') === -1 ? href : `${protocol}//${host.replace('m.', '')}${pathname}`;

  return <Link href={mobUrl}>{children}</Link>;
}

MobileLink.propTypes = {
  children: PropTypes.node.isRequired,
};
