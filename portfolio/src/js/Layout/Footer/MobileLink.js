import React from 'react';
import PropTypes from 'prop-types';

export default function MobileLink(props) {
  const { children } = props;
  const { protocol, host, pathname } = window.location;

  const mobUrl =
    host.indexOf('m.') === -1
      ? `${protocol}//m.${host}${pathname}`
      : `${protocol}//${host}${pathname}`;

  return <a href={mobUrl}>{children}</a>;
}

MobileLink.propTypes = {
  children: PropTypes.node.isRequired,
};
