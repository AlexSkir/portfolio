/* eslint-disable no-restricted-globals */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import ScrollTop from './ScrollTop';
import NavBar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import poster from '../../assets/images/portfolio.png';
import ThemeWrapper from '../common/ThemeWrapper';

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

function MainLayout(props) {
  const { locale } = useParams();
  const { i18n, t } = useTranslation();
  const { pathname } = useLocation();

  React.useEffect(() => {
    console.log('changed path');
    i18n.changeLanguage(locale);
    i18n.getFixedT(locale);
  }, [pathname]);

  return (
    <ThemeWrapper>
      <Container className="container-mainWrapper" maxWidth="false" sx={containerWrapper}>
        <Header />
        <NavBar locale={locale} />

        <Box className="container-mainWrapper__main-layout" sx={mainLayout}>
          <ScrollTop />
          <Outlet />
        </Box>

        <Footer />
      </Container>
    </ThemeWrapper>
  );
}

export default MainLayout;
