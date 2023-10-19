'use client';

import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileLink(props) {
  const { children } = props;
  const { protocol, host } = typeof window !== 'undefined' ? window.location : {};
  const pathname = usePathname();

  const mobUrl =
    host.indexOf('m.') === -1
      ? `${protocol}//${host}${pathname}`
      : `${protocol}//${host.replace('m.', '')}${pathname}`;

  return <Link href={mobUrl}>{children}</Link>;
}

MobileLink.propTypes = {
  children: PropTypes.node.isRequired,
};
