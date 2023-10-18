import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';
import Typography from '../Typography';
import LoadingBlock from '../common/LoadingBlock';
import Logo from '../../assets/logo.png';

const LangSwitcher = lazy(() => import('./MyLangSwitcher'));

export default function Header({ lng, t }) {
  return (
    <div className="container-mainWrapper__header-section">
      <Link href="/" className="header-section__logo-link">
        <Image
          src={Logo}
          width={120}
          height={30}
          priority
          placeholder="blur"
          alt="Aleksandra Skirnevskaia Logo"
        />
      </Link>

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
