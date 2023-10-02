'use client';

import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import useTranslation from '../../i18n/client';
// import { Footer } from '../components/Footer/client';
// import { Footer } from '../components/Footer';
import Loading from '../loading';

export default function Page({ params: { lng } }) {
  const { t } = useTranslation(lng, 'projects');
  const [counter, setCounter] = React.useState(0);
  return <Loading />;
}

Page.propTypes = {
  params: PropTypes.object.isRequired,
};
