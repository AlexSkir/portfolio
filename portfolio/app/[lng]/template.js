'use client';

import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'next/navigation';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ThemeWrapper from './components/theme/ThemeWrapper';
import ScrollTop from './components/ScrollTop';
import Loading from './loading';
import LoadingApp from './components/LoadingApp';

const Header = lazy(() => import('./components/Header'));
const Footer = lazy(() => import('./components/Footer'));
const Navbar = lazy(() => import('./components/Navbar'));

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
      <Suspense fallback={<LoadingApp />}>
        <Container className="container-mainWrapper" maxWidth="false" sx={containerWrapper}>
          <Header lng={lng} />
          <Navbar lng={lng} />

          <Box className="container-mainWrapper__main-layout" sx={mainLayout}>
            <ScrollTop />
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </Box>
          <Footer lng={lng} />
        </Container>
      </Suspense>
    </ThemeWrapper>
  );
}

Template.propTypes = {
  children: PropTypes.node.isRequired,
};
