'use client';

import React from 'react';
import PropTypes from 'prop-types';
import { usePathname } from 'next/navigation';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useTranslation } from '../../../i18n/client';

import NavbarButton from './NavbarButton';
import Home from '../../assets/svg/Home.svg';
import Resume from '../../assets/svg/Resume.svg';
import Portfolio from '../../assets/svg/Portfolio.svg';
import Contact from '../../assets/svg/Contact.svg';

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

export default function Navbar({ lng }) {
  const { t } = useTranslation(lng);
  const pathname = usePathname();
  // const [location, setLocation] = React.useState(`/${lng}`);

  const pages = [
    { name: t('navbar.home'), path: `/${lng}`, icon: <Home className="navbar-svg" /> },
    { name: t('navbar.resume'), path: `/${lng}/resume`, icon: <Resume className="navbar-svg" /> },
    {
      name: t('navbar.portfolio'),
      path: `/${lng}/portfolio`,
      icon: <Portfolio className="navbar-svg" />,
      portfolio: true,
    },
    {
      name: t('navbar.contact'),
      path: `/${lng}/contact`,
      icon: <Contact className="navbar-svg" />,
    },
  ];

  return (
    <>
      <AppBar
        position="static"
        className="navbar-block"
        sx={{ backgroundColor: 'primary.light' }}
        elevation={0}
      >
        <Toolbar disableGutters>
          <div className="navbar-block__top-btns-wrapper">
            {pages.map((page) => (
              <NavbarButton
                key={page.name}
                title={page.name}
                href={page.path}
                status={page.portfolio ? pathname.includes('portfolio') : pathname === page.path}
                classes="navbar-block__top-btn"
              >
                {page.icon}
              </NavbarButton>
            ))}
          </div>
        </Toolbar>
      </AppBar>

      <div className="navbar-block__bottom-block">
        <div className="navbar-block__bottom-btns-wrapper">
          {pages.map((page) => (
            <NavbarButton
              key={page.name}
              title={page.name}
              href={page.path}
              status={pathname === page.path}
              classes="navbar-block__bottom-btn"
            >
              {page.icon}
            </NavbarButton>
          ))}
        </div>
      </div>
    </>
  );
}

Navbar.propTypes = {
  lng: PropTypes.string.isRequired,
};
