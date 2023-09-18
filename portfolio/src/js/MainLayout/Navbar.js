import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import Paper from '@mui/material/Paper';

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

function NavBar() {
  const { i18n, t } = useTranslation();
  const lang = i18n.resolvedLanguage;
  const { pathname } = useLocation();
  const [location, setLocation] = React.useState(`/${lang}`);

  const theme = useTheme();

  const pages = [
    { name: t('navbar.home'), path: `/${lang}`, icon: <HomeOutlinedIcon /> },
    { name: t('navbar.resume'), path: `/${lang}/resume`, icon: <ArticleOutlinedIcon /> },
    {
      name: t('navbar.portfolio'),
      path: `/${lang}/portfolio`,
      icon: <WorkOutlineOutlinedIcon />,
    },
    { name: t('navbar.contact'), path: `/${lang}/contact`, icon: <ContactMailOutlinedIcon /> },
  ];

  const handleOpenNavMenu = (event) => {
    const curPage = event.currentTarget;
  };

  React.useEffect(() => {
    console.log('nabar params', lang);
    const curPage = pathname;
    setLocation(curPage);
    console.log('curPage', curPage);
    if (location.includes('portfolio')) {
      setLocation(`/${lang}/portfolio`);
    }
  }, [handleOpenNavMenu]);

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
                status={location === page.path}
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
              status={location === page.path}
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
