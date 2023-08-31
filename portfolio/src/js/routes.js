import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import MainLayout from './MainLayout';
import Home from './HomePage';
import Resume from './ResumePage';
import Portfolio from './PortfolioPage';
import Project from './PortfolioPage/ProjectPage';
import Contact from './ContactPage';
import NoMatch from './common/NoMatchPage';
import projectArr from './common/projectsArray';

const AppRouter = () => {
  const { i18n, t } = useTranslation();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="Resume" element={<Resume />} />
          <Route path="Portfolio">
            <Route index element={<Portfolio />} />
            {Object.values(projectArr(t)).map((project) => (
              <Route key={project.name} path={project.path} element={<Project data={project} />} />
            ))}
          </Route>
          <Route path="Contact" element={<Contact />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
