'use client';

import React from 'react';
import Skeleton from '@mui/material/Skeleton';

const skeletonRight = {
  width: '100%',
  height: '100%',
  borderRadius: { xs: '8px', sm: '20px' },
  backgroundColor: 'primary.accent',
};

export default function Loading() {
  return (
    <div className="loading__body">
      <Skeleton variant="rounded" sx={skeletonRight} />
    </div>
  );
}
