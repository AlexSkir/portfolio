'use client';

import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'next/navigation';
import ThemeWrapper from '../theme/ThemeWrapper';
import ScrollTop from '../common/ScrollTop';
import Loading from '../../loading';
import LoadingApp from '../common/LoadingApp';
import { raleway } from '../Typography';

const Header = lazy(() => import('../Header'));
const Footer = lazy(() => import('../Footer'));
const Navbar = lazy(() => import('../Navbar'));

export default function MainLayout({ children }) {
  const { lng } = useParams();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <ThemeWrapper>
      <Suspense fallback={<LoadingApp />}>
        <div className={`container-mainWrapper ${raleway.variable}`}>
          <Header lng={lng} />
          <Navbar lng={lng} />

          <div className="container-mainWrapper__main-layout">
            <ScrollTop />
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </div>
          <Footer lng={lng} />
        </div>
      </Suspense>
    </ThemeWrapper>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
