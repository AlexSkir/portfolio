'use client';

import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'next/navigation';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import ThemeWrapper from './components/theme/ThemeWrapper';
import ScrollTop from './components/ScrollTop';
import NavBar from './components/Navbar';

const containerWrapper = {
  maxWidth: { lg: '1300px' },
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  backgroundColor: 'background.default',
};
const mainLayout = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  mt: { xs: '50px', sm: '150px' },
};

export default function Template({ children }) {
  const { lng } = useParams();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <ThemeWrapper>
      <Container className="container-mainWrapper" maxWidth="false" sx={containerWrapper}>
        <Header lng={lng} />
        <NavBar lng={lng} />

        <Box className="container-mainWrapper__main-layout" sx={mainLayout}>
          <ScrollTop />
          {children}
        </Box>
        {/* <Footer lng={lng} /> */}
      </Container>
    </ThemeWrapper>
  );
}

Template.propTypes = {
  children: PropTypes.node.isRequired,
};
