'use client';

import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import LoadingBlock from '../common/LoadingBlock';

const LangSwitcher = lazy(() => import('./MyLangSwitcher'));
const Home = lazy(() => import('../../assets/svg/Home.svg'));
const Person = lazy(() => import('../../assets/svg/Person.svg'));
const Portfolio = lazy(() => import('../../assets/svg/Portfolio.svg'));
const Phone = lazy(() => import('../../assets/svg/Phone.svg'));
const Typography = lazy(() => import('../Typography'));

const classname = 'MyTypography MyTypography-navbar';

export default function Header({ lng, t }) {
  const pathname = usePathname();

  const pages = [
    { name: t.navbar.home, path: `/${lng}`, icon: <Home className="navbar-svg MySvg-icon" /> },
    {
      name: t.navbar.resume,
      path: `/${lng}/resume`,
      icon: <Person className="navbar-svg MySvg-icon" />,
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
      icon: <Phone className="navbar-svg MySvg-icon" />,
    },
  ];

  const checkPath = (page) => {
    if (page.portfolio) {
      if (pathname.includes('portfolio')) {
        return 'is_active';
      }
    } else if (pathname === page.path) {
      return 'is_active';
    }
    return '';
  };
  return (
    <div className="container-mainWrapper__header-section">
      <Suspense fallback={<LoadingBlock width="56px" height="56px" variant="circular" />}>
        <LangSwitcher t={t} />
      </Suspense>

      <div className="navbar-block__top-block">
        {pages.map((page) => (
          <Link key={page.name} href={page.path} className={`${classname} ${checkPath(page)}`}>
            <Typography variant="body3">{page.name}</Typography>
          </Link>
        ))}
      </div>

      <div className="navbar-block__side-block">
        <div className="navbar-block__side-links-wrapper">
          {pages.map((page) => (
            <Suspense key={page.name} fallback={<LoadingBlock width="10px" height="10px" />}>
              <Link href={page.path} className={`${classname} ${checkPath(page)}`}>
                <div className="navbar-parabola" />
                {page.icon}
              </Link>
            </Suspense>
          ))}
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
  lng: PropTypes.string.isRequired,
  t: PropTypes.object.isRequired,
};
