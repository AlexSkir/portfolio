/* eslint-disable no-restricted-globals */
import React from 'react';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import ResponsiveAppBar from './Navbar';
import SideBlock from './SideBlock';
import { ThemeSwitcher } from '../common/ThemeSwitcher';
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
  flexDirection: { xs: 'column', md: 'row' },
  justifyContent: 'center',
  mt: { xs: '50px', sm: '150px' },
};
const contentWrapper = {
  backgroundColor: 'primary.paper',
  width: '100%',
  minWidth: '50%',
  maxWidth: '820px',
  height: 'auto',
  minHeight: '700px',
  position: 'relative',
  p: { xs: '30px', lg: '30px 50px 30px 70px' },
};

function MainLayout(props) {
  const { children } = props;

  return (
    <>
      <Container className="container-mainWrapper" maxWidth="false" sx={containerWrapper}>
        <Header />
        <ResponsiveAppBar />

        <Box className="container-mainWrapper__main-layout" sx={mainLayout}>
          <SideBlock location={location} />
          <Box
            className="container-mainWrapper__content-wrapper border-radius-20"
            sx={contentWrapper}
          >
            <Box className="container-mainWrapper__page-wrapper">{children}</Box>
          </Box>
        </Box>
        <Footer />
      </Container>
    </>
  );
}

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ThemeSwitcher(MainLayout);
