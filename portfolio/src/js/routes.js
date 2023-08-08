import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import MainLayout from './MainLayout/index';
import RouteWithSubRoutes from './RouteWithSubRoutes';

const Home = lazy(() => import('./HomePage/index'));
/* const About = lazy(() => import('./app/pages/About'));
const Contact = lazy(() => import('./app/pages/Contact')); */

const routes = [
  {
    path: '/Home',
    component: Home,
  },
  /* {
    path: '/about',
    component: About,
  },
  {
    path: '/contact',
    component: Contact,
  }, */
];

const AppRouter = () => {
  return (
    <Router>
      <MainLayout>
        <Suspense fallback={<div className="lazy-loading">Loading...</div>}>
          <Route exact path="/">
            <Redirect to="/Home" />
          </Route>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Suspense>
      </MainLayout>
    </Router>
  );
};

export default AppRouter;
