import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

export default function Loading() {
  let sideBlockOpen = true;

  if (typeof window !== 'undefined') {
    sideBlockOpen = localStorage?.getItem('sideBlockOpen')
      ? JSON.parse(localStorage.getItem('sideBlockOpen'))
      : window.screen.width > 1200;
  }
  return (
    <Stack spacing={1} sx={{ width: '100%', height: '500px' }}>
      <Box
        sx={{
          display: 'flex',
          gap: { xs: '2px', lg: sideBlockOpen ? '30px' : '2px' },
          width: '100%',
          height: '100%',
        }}
      >
        <Skeleton
          variant="rounded"
          sx={{
            width: sideBlockOpen ? '400px' : '70px',
            minWidth: sideBlockOpen ? '400px' : '70px',
            height: '100%',
            display: { xs: 'none', md: 'block' },
            borderRadius: '20px',
            backgroundColor: 'primary.accent',
          }}
        />
        <Skeleton
          variant="rounded"
          sx={{
            width: '100%',
            height: '100%',
            borderRadius: '20px',
            backgroundColor: 'primary.accent',
          }}
        />
      </Box>
    </Stack>
  );
}
