import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function NoMatch() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h4" align="center" sx={{ mb: '20px' }}>
        Ops, this page doesn&apos;t exist!
      </Typography>
      <Button size="large" variant="contained" color="secondary">
        <Link href="/" underline="none" color="black">
          <Typography variant="2">Go Home</Typography>
        </Link>
      </Button>
    </Box>
  );
}
