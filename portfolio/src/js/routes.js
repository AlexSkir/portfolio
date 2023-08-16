import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import MainLayout from './MainLayout/index';
import PageLayout from './common/PageLayout';
import Home from './HomePage/index';
import Resume from './ResumePage/index';
import Portfolio from './PortfolioPage/index';
import Project from './PortfolioPage/Project';
import NoMatch from './common/NoMatchPage';
import projectArr from './PortfolioPage/projectsArray';

// const Home = lazy(() => import('./HomePage/index'));
/* const Resume = lazy(() => import('./ResumePage/index'));
const Portfolio = lazy(() => import('./PortfolioPage/index'));
const Project = lazy(() => import('./PortfolioPage/Project')); */
/* const Contact = lazy(() => import('./app/pages/Contact')); */

const routes = [
  {
    path: '/Home',
    component: Home,
  },
  {
    path: '/Resume',
    component: Resume,
  },
  {
    path: '/Portfolio',
    component: Portfolio,
  },
  {
    path: '/Portfolio/:Fesco',
    component: Project,
    data: projectArr.fesco,
  },
];

const AppRouter = () => {
  const { pathname } = window.location;
  console.log('route', pathname);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout pathname={pathname} />}>
          <Route index element={<Home pathname={pathname} />} />
          <Route path="Resume" element={<Resume pathname={pathname} />} />
          <Route path="Portfolio" element={<PageLayout title="Portfolio" />}>
            <Route index element={<Portfolio pathname={pathname} />} />
            {Object.values(projectArr).map((project) => (
              <Route key={project.name} path={project.path} element={<Project data={project} />} />
            ))}
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
