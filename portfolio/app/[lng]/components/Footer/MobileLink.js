'use client';

import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileLink(props) {
  const { children } = props;
  const [url, setUrl] = React.useState('');
  const pathname = usePathname();

  React.useEffect(() => {
    const { protocol, host } = window.location;
    const mobUrl =
      host.indexOf('m.') === -1
        ? `${protocol}//${host}${pathname}`
        : `${protocol}//${host.replace('m.', '')}${pathname}`;
    setUrl(mobUrl);
  });

  return <Link href={url}>{children}</Link>;
}

MobileLink.propTypes = {
  children: PropTypes.node.isRequired,
};
