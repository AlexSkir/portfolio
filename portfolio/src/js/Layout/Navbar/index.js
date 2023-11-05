import React, { lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import LoadingBlock from '../../common/LoadingBlock';

const NavbarButton = lazy(() => import('./NavbarButton'));
const Home = lazy(() => import('../../../assets/svg/Home.svg'));
const Resume = lazy(() => import('../../../assets/svg/Resume.svg'));
const Portfolio = lazy(() => import('../../../assets/svg/Portfolio.svg'));
const Contact = lazy(() => import('../../../assets/svg/Contact.svg'));

export default function Navbar() {
  const { t } = useTranslation();
  const { pathname } = window.location;

  const pages = [
    { name: t('navbar.home'), path: '/', icon: <Home className="navbar-svg MySvg-icon" /> },
    {
      name: t('navbar.resume'),
      path: '/resume',
      icon: <Resume className="navbar-svg MySvg-icon" />,
    },
    {
      name: t('navbar.portfolio'),
      path: '/portfolio',
      icon: <Portfolio className="navbar-svg MySvg-icon" />,
      portfolio: true,
    },
    {
      name: t('navbar.contact'),
      path: '/contact',
      icon: <Contact className="navbar-svg MySvg-icon" />,
    },
  ];

  return (
    <div className="navbar-block__bottom-block">
      <div className="navbar-block__bottom-btns-wrapper">
        {pages.map((page) => (
          <Suspense
            key={page.name}
            fallback={<LoadingBlock width="25%" height="56px" variant="rounded" />}
          >
            <NavbarButton
              title={page.name}
              href={page.path}
              status={page.portfolio ? pathname.includes('portfolio') : pathname === page.path}
              classes="navbar-block__bottom-btn"
            >
              {page.icon}
            </NavbarButton>
          </Suspense>
        ))}
      </div>
    </div>
  );
}
