'use client';

import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { usePathname } from 'next/navigation';
import LoadingBlock from '../common/LoadingBlock';

const NavbarButton = lazy(() => import('./NavbarButton'));
const Home = lazy(() => import('../../assets/svg/Home.svg'));
const Resume = lazy(() => import('../../assets/svg/Resume.svg'));
const Portfolio = lazy(() => import('../../assets/svg/Portfolio.svg'));
const Contact = lazy(() => import('../../assets/svg/Contact.svg'));

export default function Navbar(props) {
  const { t, lng } = props;
  const pathname = usePathname();

  const pages = [
    { name: t.navbar.home, path: `/${lng}`, icon: <Home className="navbar-svg MySvg-icon" /> },
    {
      name: t.navbar.resume,
      path: `/${lng}/resume`,
      icon: <Resume className="navbar-svg MySvg-icon" />,
    },
    {
      name: t.navbar.portfolio,
      path: `/${lng}/portfolio`,
      icon: <Portfolio className="navbar-svg MySvg-icon" />,
      portfolio: true,
    },
    {
      name: t.navbar.contact,
      path: `/${lng}/contact`,
      icon: <Contact className="navbar-svg MySvg-icon" />,
    },
  ];

  return (
    <>
      <div className="navbar-block">
        <div className="navbar-block__top-btns-wrapper">
          {pages.map((page) => (
            <Suspense fallback={<LoadingBlock width="80px" height="80px" variant="rounded" />}>
              <NavbarButton
                key={page.name}
                title={page.name}
                href={page.path}
                status={page.portfolio ? pathname.includes('portfolio') : pathname === page.path}
                classes="navbar-block__top-btn"
              >
                {page.icon}
              </NavbarButton>
            </Suspense>
          ))}
        </div>
      </div>

      <div className="navbar-block__bottom-block">
        <div className="navbar-block__bottom-btns-wrapper">
          {pages.map((page) => (
            <Suspense fallback={<LoadingBlock width="25%" height="56px" variant="rounded" />}>
              <NavbarButton
                key={page.name}
                title={page.name}
                href={page.path}
                status={pathname === page.path}
                classes="navbar-block__bottom-btn"
              >
                {page.icon}
              </NavbarButton>
            </Suspense>
          ))}
        </div>
      </div>
    </>
  );
}

Navbar.propTypes = {
  lng: PropTypes.string.isRequired,
  t: PropTypes.object.isRequired,
};
