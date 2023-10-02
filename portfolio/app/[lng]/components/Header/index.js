import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Typography from '../Typography';
import LoadingBlock from '../common/LoadingBlock';

// import LangSwitcher from './langSwitcher';
// import ThemeSwitcher from './themeSwitcher';

const LangSwitcher = lazy(() => import('./LangSwitcher'));
const ThemeSwitcher = lazy(() => import('./ThemeSwitcher'));

export default function Header({ lng, t }) {
  return (
    <div className="container-mainWrapper__header-section">
      <Link href={`/${lng}`} className="header-section__logo-link">
        <Typography variant="h1" classes="header-section__logo">
          {t.header.name}
        </Typography>
        <Typography variant="h1" classes="gradientText header-section__logo">
          {t.header.name2}
        </Typography>
      </Link>

      <Suspense fallback={<LoadingBlock width="56px" height="56px" variant="circular" />}>
        <ThemeSwitcher t={t} />
      </Suspense>

      <Suspense fallback={<LoadingBlock width="56px" height="56px" variant="circular" />}>
        <LangSwitcher t={t} />
      </Suspense>
    </div>
  );
}

Header.propTypes = {
  lng: PropTypes.string.isRequired,
  t: PropTypes.object.isRequired,
};
