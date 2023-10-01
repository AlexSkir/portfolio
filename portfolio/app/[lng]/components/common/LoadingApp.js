'use client';

import React from 'react';
import { useCookies } from 'react-cookie';
import Skeleton from '@mui/material/Skeleton';

const skeletonLogo = {
  height: { xs: '48%', sm: '100%' },
  width: { xs: '100%', sm: '48%' },
  backgroundColor: 'primary.accent',
};

const skeletonBtn = { width: '56px', height: '56px', backgroundColor: 'primary.accent' };
const skeletonNavbar = {
  width: '100%',
  height: '100%',
  borderRadius: { xs: '8px', sm: '20px' },
  backgroundColor: 'primary.accent',
};

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

export default function LoadingApp() {
  const [cookies, setCookie] = useCookies(['sideBlockOpen']);
  let sideBlockOpen = typeof window !== 'undefined' ? window.screen.width > 1200 : true;
  sideBlockOpen = typeof cookies.sideBlockOpen !== 'undefined' ? cookies.sideBlockOpen : true;
  console.log(cookies.sideBlockOpen);
  const [open, setOpen] = React.useState(sideBlockOpen);

  return (
    <div className="loading-app__wrapper">
      <div className="loading-app__header">
        <div className="loading-app__logo">
          <Skeleton variant="text" sx={skeletonLogo} />
          <Skeleton variant="text" sx={skeletonLogo} />
        </div>
        <div className="loading-app_btns">
          <Skeleton variant="circular" sx={{ ...skeletonBtn, mr: '40px' }} />
          <Skeleton variant="circular" sx={skeletonBtn} />
        </div>
      </div>
      <div className="loading-app__navbar">
        <Skeleton variant="rounded" sx={skeletonNavbar} />
      </div>
      <div className={`loading-app__body ${open ? 'open' : ''}`}>
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
    </div>
  );
}
