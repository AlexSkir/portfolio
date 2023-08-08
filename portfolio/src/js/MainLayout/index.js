/* eslint-disable no-restricted-globals */
import React from 'react';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import ResponsiveAppBar from './Navbar';
import SideBlock from './SideBlock';
import { MyThemeSwitch, ThemeSwitcher } from '../common/ThemeSwitcher';
import Typography from '../common/typography';

function MainLayout(props) {
  const { children } = props;

  console.log(children);

  return (
    <>
      <Container
        className="container-mainWrapper"
        maxWidth="false"
        sx={{ maxWidth: { lg: '1300px' }, display: 'flex', flexDirection: 'column' }}
      >
        <Box
          className="header-section"
          sx={{
            position: 'relative',
            width: '100%',
            height: '104px',
            margin: '20px 0 150px 0',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <Link
            href="/Home"
            underline="none"
            sx={{ display: 'flex', alignItems: 'center', height: '42px', cursor: 'pointer' }}
          >
            <Typography variant="h1" component="h1" sx={{ mr: '10px' }}>
              Aleksandra
            </Typography>
            <Typography variant="h1" component="h1" className="gradientText">
              Skirnevskaia
            </Typography>
          </Link>
          <MyThemeSwitch />
        </Box>
        <Box
          className="main-layout"
          sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
        >
          <SideBlock location={location} />
          <Box
            className="content-wrapper"
            sx={{ backgroundColor: 'primary.lighter', width: '820px', height: '700px' }}
          >
            <ResponsiveAppBar />
            <Box className="page-wrapper">{children}</Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ThemeSwitcher(MainLayout);
