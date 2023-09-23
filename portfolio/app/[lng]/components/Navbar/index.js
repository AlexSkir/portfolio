'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import Paper from '@mui/material/Paper';
import { useTranslation } from '../../../i18n/client';

import NavbarButton from './NavbarButton';

const appbarWrapper = {
  display: { xs: 'none', sm: 'flex' },
  width: '90%',
  maxWidth: '500px',
  height: { xs: '50px', sm: '100px' },
  position: 'absolute',
  top: { xs: '95px', sm: '145px' },
  right: { xs: '16px', sm: '24px' },
  backgroundColor: 'primary.light',
  p: { xs: '0 30px', sm: '10px 30px' },
  borderRadius: '20px',
};

const navbarBtn = {
  width: '80px',
  height: '80px',
  backgroundColor: 'primary.accent',
  color: 'primary.contrastText',
  borderRadius: '20px',
  flexDirection: 'column',
};

const bottomNav = {
  width: '25%',
  height: '100%',
  color: 'primary.contrastText',
  flexDirection: 'column',
  fontSize: '10px',
  '& svg': {
    fontSize: '20px',
  },
};

function NavBar({ lng }) {
  const { t } = useTranslation(lng);
  const pathname = usePathname();
  // const [location, setLocation] = React.useState(`/${lng}`);

  const pages = [
    { name: t('navbar.home'), path: `/${lng}`, icon: <HomeOutlinedIcon /> },
    { name: t('navbar.resume'), path: `/${lng}/resume`, icon: <ArticleOutlinedIcon /> },
    {
      name: t('navbar.portfolio'),
      path: `/${lng}/portfolio`,
      icon: <WorkOutlineOutlinedIcon />,
      portfolio: true,
    },
    { name: t('navbar.contact'), path: `/${lng}/contact`, icon: <ContactMailOutlinedIcon /> },
  ];

  const handleOpenNavMenu = (event) => {
    const curPage = event.currentTarget;
  };

  /* React.useEffect(() => {
    const curPage = pathname;
    setLocation(curPage);
    console.log('curPage', curPage);
    if (location.includes('portfolio')) {
      setLocation(`/${lng}/portfolio/`);
    }
  }); */

  return (
    <>
      <AppBar position="static" className="navbar-block" sx={appbarWrapper} elevation={0}>
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'flex' },
              justifyContent: 'space-between',
            }}
          >
            {pages.map((page) => (
              <NavbarButton
                key={page.name}
                title={page.name}
                handleClick={handleOpenNavMenu}
                href={page.path}
                status={page.portfolio ? pathname.includes('portfolio') : pathname === page.path}
                sx={navbarBtn}
              >
                {page.icon}
              </NavbarButton>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Paper
        sx={{
          display: { xs: 'block', sm: 'none' },
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: '100',
        }}
        elevation={3}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center', height: '56px' }}>
          {pages.map((page) => (
            <NavbarButton
              key={page.name}
              title={page.name}
              handleClick={handleOpenNavMenu}
              href={page.path}
              status={pathname === page.path}
              sx={bottomNav}
            >
              {page.icon}
            </NavbarButton>
          ))}
        </Box>
      </Paper>
    </>
  );
}
export default NavBar;
