'use client';

import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useTranslation } from '../../i18n/client';
// import { Footer } from '../components/Footer/client';
// import { Footer } from '../components/Footer';

export default function Page({ params: { lng } }) {
  const { t } = useTranslation(lng, 'projects');
  const [counter, setCounter] = React.useState(0);
  return (
    <>
      <h1>{t('projects.static')}</h1>
      <p>
        {t('projects.app')}
        {counter}
      </p>
      <div>
        <button type="button" onClick={() => setCounter(Math.max(0, counter - 1))}>
          -
        </button>
        <button type="button" onClick={() => setCounter(Math.min(10, counter + 1))}>
          +
        </button>
      </div>
      <Link href={`/${lng}`}>
        <button type="button">back</button>
      </Link>
      {/* <Footer lng={lng} pathname={usePathname()} /> */}
    </>
  );
}

Page.propTypes = {
  params: PropTypes.object.isRequired,
};
