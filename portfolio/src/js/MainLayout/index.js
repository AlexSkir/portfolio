/* eslint-disable no-restricted-globals */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import ScrollTop from './ScrollTop';
import NavBar from './Navbar';
import Header from './Header';
import Footer from './Footer';

const containerWrapper = {
  maxWidth: { lg: '1300px' },
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
};
const mainLayout = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  mt: { xs: '50px', sm: '150px' },
};

function MainLayout() {
  return (
    <>
      <Container className="container-mainWrapper" maxWidth="false" sx={containerWrapper}>
        <Header />
        <NavBar />

        <Box className="container-mainWrapper__main-layout" sx={mainLayout}>
          <ScrollTop />
          <Outlet />
        </Box>

        <Footer />
      </Container>
    </>
  );
}

export default MainLayout;
