import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';

import NavbarButton from './NavbarButton';

const appbarWrapper = {
  width: '90%',
  maxWidth: '500px',
  height: { xs: '50px', sm: '100px' },
  position: 'absolute',
  top: { xs: '95px', sm: '145px' },
  right: { xs: '16px', sm: '24px' },
  backgroundColor: 'primary.light',
  p: { xs: '0 30px', sm: '10px 30px' },
};

const pages = [
  { name: 'Home', icon: <HomeOutlinedIcon /> },
  { name: 'Resume', icon: <ArticleOutlinedIcon /> },
  { name: 'Work', icon: <WorkOutlineOutlinedIcon /> },
  { name: 'Contact', icon: <ContactMailOutlinedIcon /> },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [location, setLocation] = React.useState('/Home');

  const theme = useTheme();

  const menuItemBG = (page, theme) => {
    return location === `/${page}` ? { background: theme.palette.secondary.gradientBG } : {};
  };

  const menuItemColor = (page, theme) => {
    return location === `/${page}`
      ? { color: theme.palette.secondary.contrastText }
      : { color: 'primary.contrastText' };
  };

  const handleOpenNavMenu = (event) => {
    const curPage = event.currentTarget;
    setAnchorElNav(curPage);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  React.useEffect(() => {
    const curPage = window.location.pathname;
    setLocation(curPage);
  }, [handleOpenNavMenu]);

  return (
    <AppBar
      position="static"
      className="navbar-block border-radius-20"
      sx={appbarWrapper}
      elevation={0}
    >
      <Toolbar disableGutters>
        {/* mobile menu */}
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: 'flex', sm: 'none' },
            justifyContent: 'flex-end',
          }}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', sm: 'none' },
              color: 'primary.contrastText',
            }}
          >
            {pages.map((page) => (
              <MenuItem
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={menuItemBG(page.name, theme)}
              >
                <Link
                  title={page.name}
                  onClick={handleOpenNavMenu}
                  href={`/${page.name}`}
                  underline="none"
                >
                  <Typography variant="button" sx={menuItemColor(page.name, theme)}>
                    {page.name}
                  </Typography>
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        {/* desktop menu */}
        <Box
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' }, justifyContent: 'space-between' }}
        >
          {pages.map((page) => (
            <NavbarButton
              key={page.name}
              title={page.name}
              handleClick={handleOpenNavMenu}
              href={`/${page.name}`}
              status={location === `/${page.name}`}
            >
              {page.icon}
            </NavbarButton>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default ResponsiveAppBar;
