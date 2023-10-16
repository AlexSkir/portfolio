'use client';

import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileLink(props) {
  const { children } = props;
  const { protocol, host } = window.location;
  const pathname = usePathname();

  const mobUrl =
    host.indexOf('m.') === -1
      ? `${protocol}//m.${host}${pathname}`
      : `${protocol}//${host}${pathname}`;

  return <Link href={mobUrl}>{children}</Link>;
}

MobileLink.propTypes = {
  children: PropTypes.node.isRequired,
};
