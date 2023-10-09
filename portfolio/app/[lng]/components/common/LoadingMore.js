import React from 'react';
import Skeleton from '@mui/material/Skeleton';

export default function LoadingMore() {
  return (
    <div style={{ width: '100%', height: 'auto', padding: '10px', gap: '16px' }}>
      <Skeleton
        variant="rounded"
        sx={{ height: '30px', width: '100%', backgroundColor: 'primary.accent' }}
      />
      <Skeleton
        variant="rounded"
        sx={{ height: '30px', width: '100%', backgroundColor: 'primary.accent' }}
      />
      <Skeleton
        variant="rounded"
        sx={{ height: '30px', width: '100%', backgroundColor: 'primary.accent' }}
      />
    </div>
  );
}
