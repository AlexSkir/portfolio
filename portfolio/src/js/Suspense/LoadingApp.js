import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

export default function LoadingMainlayout() {
  const sideBlockOpen = localStorage?.getItem('sideBlockOpen')
    ? JSON.parse(localStorage.getItem('sideBlockOpen'))
    : window.screen.width > 1200;
  return (
    <Stack spacing={1} sx={{ width: '100%', height: '100vh', p: '30px', boxSizing: 'border-box' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Skeleton variant="text" sx={{ fontSize: '40px', width: '200px' }} />
        <Skeleton variant="circular" sx={{ width: '50px', height: '50px' }} />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Skeleton
          variant="rounded"
          sx={{
            display: { xs: 'none', sm: 'flex' },
            width: '90%',
            maxWidth: '500px',
            height: { xs: '50px', sm: '100px' },
            borderRadius: '20px',
            mt: '50px',
          }}
        />
      </Box>
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
          }}
        />
        <Skeleton
          variant="rounded"
          sx={{ width: '100%', height: '100%', borderRadius: '20px', mt: { xs: '50px', md: 0 } }}
        />
      </Box>
    </Stack>
  );
}
