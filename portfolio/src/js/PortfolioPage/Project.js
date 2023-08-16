import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

export default function ProjectsList(props) {
  const { data } = props;
  return (
    <Box>
      <h1>{data.name}</h1>
      <h5>{data.description}</h5>
    </Box>
  );
}
