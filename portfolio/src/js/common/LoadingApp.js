import React from 'react';
import Skeleton from '@mui/material/Skeleton';

const skeletonLogo = {
  height: '30px',
  width: '120px',
  backgroundColor: 'primary.accent',
};

const skeletonBtn = { width: '56px', height: '56px', backgroundColor: 'primary.accent' };
const skeletonNavbar = {
  width: '100%',
  height: '100%',
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
  return (
    <div className="loading-app__wrapper">
      <div className="loading-app__header">
        <div className="loading-app__logo">
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
      <div className="loading-app__body">
        <Skeleton variant="rounded" sx={skeletonRight} />
      </div>
    </div>
  );
}
