import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import MainLayout from './MainLayout';
import NoMatch from './common/NoMatchPage';
import projectArr from './PortfolioPage/projectsArray';
import LoadingApp from './Suspense/LoadingApp';

import Home from './HomePage';
import Resume from './ResumePage';
import Portfolio from './PortfolioPage';
import Project from './PortfolioPage/ProjectPage';
import Contact from './ContactPage';
/* 
const Home = lazy(() => import('./HomePage'));
const Resume = lazy(() => import('./ResumePage'));
const Portfolio = lazy(() => import('./PortfolioPage'));
const Project = lazy(() => import('./PortfolioPage/ProjectPage'));
const Contact = lazy(() => import('./ContactPage')); */

const AppRouter = () => {
  const { t } = useTranslation();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="resume" element={<Resume />} />
          <Route path="portfolio">
            <Route index element={<Portfolio />} />
            {Object.values(projectArr(t)).map((project) => (
              <Route key={project.name} path={project.path} element={<Project data={project} />} />
            ))}
          </Route>
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
