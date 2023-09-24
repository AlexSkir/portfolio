import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

export default function LoadingBlock(props) {
  const { width, height, variant } = props;
  return (
    <Box className="skeleton-block__wrapper" sx={{ width, height }}>
      <Skeleton
        variant={variant}
        sx={{ height: '100%', width: '100%', backgroundColor: 'primary.accent' }}
      />
    </Box>
  );
}

LoadingBlock.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};
