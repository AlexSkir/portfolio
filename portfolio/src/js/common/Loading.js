import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

export default function Loading() {
  return (
    <Stack spacing={1}>
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="circular" width={40} height={40} />
      <Box sx={{ display: 'flex', gap: '30px' }}>
        <Skeleton variant="rectangular" width="50%" height="50%" />
        <Skeleton variant="rounded" width="50%" height="50%" />
      </Box>
    </Stack>
  );
}
