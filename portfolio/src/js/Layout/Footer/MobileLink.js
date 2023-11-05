import React from 'react';
import PropTypes from 'prop-types';

export default function MobileLink(props) {
  const { children } = props;
  const { protocol, host, pathname } = window.location;

  const mobUrl =
    host.indexOf('m.') === -1
      ? `${protocol}//${host}${pathname}`
      : `${protocol}//${host.replace('m.', '')}${pathname}`;

  return <a href={mobUrl}>{children}</a>;
}

MobileLink.propTypes = {
  children: PropTypes.node.isRequired,
};
