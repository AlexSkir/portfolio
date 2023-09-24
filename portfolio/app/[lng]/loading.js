'use client';

import React from 'react';
import { useCookies } from 'react-cookie';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

export default function Loading() {
  const [cookies, setCookie] = useCookies(['sideBlockOpen']);
  const sideBlockOpen = cookies.sideBlockOpen || window.screen.width > 1200;
  const [open, setOpen] = React.useState(sideBlockOpen);

  return (
    <Stack spacing={1} sx={{ width: '100%', height: '500px' }}>
      <Box
        sx={{
          display: 'flex',
          gap: { xs: '2px', lg: open ? '30px' : '2px' },
          width: '100%',
          height: '100%',
        }}
      >
        <Skeleton
          variant="rounded"
          sx={{
            width: open ? '400px' : '70px',
            minWidth: open ? '400px' : '70px',
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
