import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

export default function LoadingApp() {
  const sideBlockOpen = localStorage?.getItem('sideBlockOpen')
    ? JSON.parse(localStorage.getItem('sideBlockOpen'))
    : window.screen.width > 1200;

  return (
    <Stack
      spacing={1}
      sx={{
        width: '100%',
        maxWidth: '1300px',
        height: '100vh',
        maxHeight: '700px',
        mx: 'auto',
        p: { xs: '16px', sm: '30px' },
        boxSizing: 'border-box',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Skeleton
          variant="text"
          sx={{ height: '40px', width: '200px', backgroundColor: 'primary.accent' }}
        />
        <Skeleton
          variant="circular"
          sx={{ width: '50px', height: '50px', backgroundColor: 'primary.accent' }}
        />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Skeleton
          variant="rounded"
          sx={{
            display: { xs: 'none', sm: 'flex' },
            width: '90%',
            maxWidth: '500px',
            height: { xs: '50px', sm: '100px' },
            borderRadius: { xs: '8px', sm: '20px' },
            mt: '50px',
            backgroundColor: 'primary.accent',
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
            borderRadius: { xs: '8px', sm: '20px' },
            backgroundColor: 'primary.accent',
          }}
        />
        <Skeleton
          variant="rounded"
          sx={{
            width: '100%',
            height: '100%',
            borderRadius: { xs: '8px', sm: '20px' },
            mt: { xs: '70px', md: 0 },
            backgroundColor: 'primary.accent',
          }}
        />
      </Box>
    </Stack>
  );
}
