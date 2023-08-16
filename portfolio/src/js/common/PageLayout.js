import React from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const PageLayout = ({ title, children }) => {
  return (
    <>
      <Box
        className="page-content__title"
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          height: '60px',
          mb: '10px',
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          sx={{
            mr: '32px',
            textTransform: 'uppercase',
            textWrap: 'nowrap',
          }}
        >
          {title}
        </Typography>
        <Box className="page-content__divider" sx={{ mt: { xs: '10px', md: '0' } }} />
      </Box>
      <Box
        className="page-content__content"
        sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}
      >
        <Outlet />
        {children}
      </Box>
    </>
  );
};

PageLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

PageLayout.defaultProps = {
  children: <></>,
};

export default PageLayout;
