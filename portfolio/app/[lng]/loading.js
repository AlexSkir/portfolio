'use client';

import React from 'react';
import { useCookies } from 'react-cookie';
import Skeleton from '@mui/material/Skeleton';

const skeletonLeft = {
  height: '100%',
  display: { xs: 'none', md: 'block' },
  borderRadius: { xs: '8px', sm: '20px' },
  backgroundColor: 'primary.accent',
};

const skeletonRight = {
  width: '100%',
  height: '100%',
  borderRadius: { xs: '8px', sm: '20px' },
  backgroundColor: 'primary.accent',
};

export default function Loading() {
  const [cookies, setCookie] = useCookies(['sideBlockOpen']);
  const sideBlockOpen = cookies.sideBlockOpen || window.screen.width > 1200;
  const [open, setOpen] = React.useState(sideBlockOpen);

  return (
    <div className={`loading__body ${open ? 'open' : ''}`}>
      <Skeleton
        variant="rounded"
        sx={{
          width: open ? '400px' : '70px',
          minWidth: open ? '400px' : '70px',
          mr: open ? '20px' : '2px',
          ...skeletonLeft,
        }}
      />
      <Skeleton variant="rounded" sx={skeletonRight} />
    </div>
  );
}
