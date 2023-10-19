import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';
import LoadingBlock from '../common/LoadingBlock';

const LangSwitcher = lazy(() => import('./MyLangSwitcher'));

export default function Header({ lng, t }) {
  return (
    <div className="container-mainWrapper__header-section">
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
