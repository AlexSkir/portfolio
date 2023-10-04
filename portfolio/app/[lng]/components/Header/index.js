import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Typography from '../Typography';
import LoadingBlock from '../common/LoadingBlock';

const LangSwitcher = lazy(() => import('./MyLangSwitcher'));
const ThemeSwitcher = lazy(() => import('./MyThemeSwitcher'));

export default function Header({ lng, t }) {
  return (
    <div className="container-mainWrapper__header-section">
      <Suspense fallback={<LoadingBlock width="263px" height="42px" variant="rectangular" />}>
        <Link href={`/${lng}`} className="header-section__logo-link">
          <Typography variant="h1" classes="header-section__logo">
            {t.header.name}
          </Typography>
          <Typography variant="h1" classes="gradientText header-section__logo">
            {t.header.name2}
          </Typography>
        </Link>
      </Suspense>

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
