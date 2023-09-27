'use client';

import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'next/navigation';
import ThemeWrapper from './components/theme/ThemeWrapper';
import ScrollTop from './components/ScrollTop';
import Loading from './loading';
import LoadingApp from './components/LoadingApp';
import { raleway } from './components/theme/Typography';

const Header = lazy(() => import('./components/Header'));
const Footer = lazy(() => import('./components/Footer'));
const Navbar = lazy(() => import('./components/Navbar'));

export default function Template({ children }) {
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

Template.propTypes = {
  children: PropTypes.node.isRequired,
};
