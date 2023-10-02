import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from '@mui/material/Skeleton';

export default function LoadingBlock(props) {
  const { width, height, variant = 'square' } = props;
  return (
    <div className="skeleton-block__wrapper" style={{ width, height }}>
      <Skeleton
        variant={variant}
        sx={{ height: '100%', width: '100%', backgroundColor: 'primary.accent' }}
      />
    </div>
  );
}

LoadingBlock.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  variant: PropTypes.string,
};
