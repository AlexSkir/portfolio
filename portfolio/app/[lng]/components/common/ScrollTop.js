'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function ScrollTop() {
  const [visible, setVisible] = React.useState(false);
  const [scrollDir, setScrollDir] = React.useState('down');

  React.useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollDir = () => {
      const { scrollY } = window;
      if (scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? 'down' : 'up');
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollDir]);

  return (
    <Box
      className="scroll-to-top-btn"
      sx={{
        display: visible && scrollDir === 'up' ? 'flex' : 'none',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: '5px',
        left: '50%',
        ml: '-20px',
        width: '50px',
        height: '50px',
        zIndex: '1000',
      }}
    >
      <Button
        sx={{ p: 0, m: 0, width: '100%', height: '100%' }}
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }}
        role="button"
      >
        <KeyboardArrowUpIcon sx={{ color: 'secondary.contrastText' }} />
      </Button>
    </Box>
  );
}
