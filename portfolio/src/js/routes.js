import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './MainLayout';
import PageLayout from './PageLayout';
import Home from './HomePage';
import Resume from './ResumePage';
import Portfolio from './PortfolioPage';
import Project from './PortfolioPage/Project';
import NoMatch from './common/NoMatchPage';
import projectArr from './PortfolioPage/projectsArray';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="Resume" element={<Resume />} />
          <Route path="Portfolio">
            <Route index element={<Portfolio />} />
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
