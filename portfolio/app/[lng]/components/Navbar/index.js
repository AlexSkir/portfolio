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

export default function Navbar({ lng }) {
  const { t } = useTranslation(lng);
  const pathname = usePathname();
  // const [location, setLocation] = React.useState(`/${lng}`);

  const pages = [
    { name: t('navbar.home'), path: `/${lng}`, icon: <Home className="navbar-svg MySvg-icon" /> },
    {
      name: t('navbar.resume'),
      path: `/${lng}/resume`,
      icon: <Resume className="navbar-svg MySvg-icon" />,
    },
    {
      name: t('navbar.portfolio'),
      path: `/${lng}/portfolio`,
      icon: <Portfolio className="navbar-svg MySvg-icon" />,
      portfolio: true,
    },
    {
      name: t('navbar.contact'),
      path: `/${lng}/contact`,
      icon: <Contact className="navbar-svg MySvg-icon" />,
    },
  ];

  return (
    <>
      <AppBar position="static" className="navbar-block" elevation={0}>
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
