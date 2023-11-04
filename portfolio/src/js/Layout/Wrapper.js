import React from 'react';
import PropTypes from 'prop-types';

export default function Wrapper({ children }) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <div className="app_appContainer">{children}</div>;
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
