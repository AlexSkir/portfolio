import * as React from 'react';
import PropTypes from 'prop-types';

import { ThemeSwitcher } from './ThemeSwitcher';

function ThemeWrapper(props) {
  const { children } = props;

  return <>{children}</>;
}
ThemeWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ThemeSwitcher(ThemeWrapper);
