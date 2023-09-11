import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

export default function LoadingMainlayout() {
  const sideBlockOpen = localStorage?.getItem('sideBlockOpen')
    ? JSON.parse(localStorage.getItem('sideBlockOpen'))
    : window.screen.width > 1200;
  return (
    <Stack spacing={2} sx={{ width: '100%', height: 'auto', p: '10px', boxSizing: 'border-box' }}>
      <Skeleton variant="rounded" sx={{ height: '30px', width: '100%' }} />
      <Skeleton variant="rounded" sx={{ height: '30px', width: '100%' }} />
      <Skeleton variant="rounded" sx={{ height: '30px', width: '100%' }} />
    </Stack>
  );
}
