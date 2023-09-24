'use client';

import React from 'react';
import { useCookies } from 'react-cookie';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

export default function LoadingApp() {
  const [cookies, setCookie] = useCookies(['sideBlockOpen']);
  const sideBlockOpen = cookies.sideBlockOpen || window.screen.width > 1200;
  const [open, setOpen] = React.useState(sideBlockOpen);

  return (
    <>
      <Stack
        spacing={1}
        sx={{
          width: '100%',
          height: '100vh',
          p: { xs: '16px', sm: '30px' },
          boxSizing: 'border-box',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Skeleton
            variant="text"
            sx={{ height: '40px', width: '200px', backgroundColor: 'primary.accent' }}
          />
          <Box sx={{ display: 'flex' }}>
            <Skeleton
              variant="circular"
              sx={{ width: '50px', height: '50px', backgroundColor: 'primary.accent', mr: '50px' }}
            />
            <Skeleton
              variant="circular"
              sx={{ width: '50px', height: '50px', backgroundColor: 'primary.accent' }}
            />
          </Box>
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
    </>
  );
}
