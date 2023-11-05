import React from 'react';
import PropTypes from 'prop-types';

function TabPanel(props) {
  const { children = '<p>No projects</p>', value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      className={`tab-panel__main-panel ${value !== index ? 'is_hidden' : 'is_flexed'}`}
    >
      {value === index && <div className="tab-panel__children-wrapper">{children}</div>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default TabPanel;
