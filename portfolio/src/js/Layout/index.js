/* eslint-disable no-restricted-globals */
import React, { Suspense, lazy } from 'react';
import { Outlet } from 'react-router-dom';
import ScrollTop from '../common/ScrollTop';
import LoadingApp from '../common/LoadingApp';
import LoadingBlock from '../common/LoadingBlock';
import LoadingContent from '../common/LoadingContent';
import ErrorBoundary from '../common/ErrorBoundary';

const Header = lazy(() => import('./Header'));
const Footer = lazy(() => import('./Footer'));
const Navbar = lazy(() => import('./Navbar'));
const Wrapper = lazy(() => import('./AppWrapper'));

function Layout() {
  return (
    <Suspense fallback={<LoadingApp />}>
      <Wrapper>
        <div className="container-mainWrapper">
          <Suspense fallback={<LoadingBlock width="100%" height="42px" />}>
            <Header />
          </Suspense>
          <Suspense
            fallback={
              <LoadingBlock
                width="100%"
                height="100px"
                variant="rounded"
                style={{ maxWidth: '500px' }}
              />
            }
          >
            <Navbar />
          </Suspense>

          <div className="container-mainWrapper__main-layout">
            <ScrollTop />
            <Suspense fallback={<LoadingContent />}>
              <ErrorBoundary>
                <Outlet />
              </ErrorBoundary>
            </Suspense>
          </div>
          <Footer />
        </div>
      </Wrapper>
    </Suspense>
  );
}

export default Layout;
