import React from 'react';
import Box from '@mui/material/Box';

export default function MyRedirect(props) {
  const { url } = props;

  React.useEffect(() => {
    console.log('click to redirect, ', url);
    window.location.href = url;
  }, []);

  return <Box hidden />;
}
