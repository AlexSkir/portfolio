import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import getDictionary from '../../i18n/dictionaries';
import PageLayout from '../components/PageLayout';
import Portfolio from './Portfolio';
import projectArr from './projectsArray';
import '../styles/Portfolio.scss';

export async function generateMetadata({ params: { lng } }) {
  const seo = await getDictionary(lng, 'seo');

  const title = seo.portfolio.title.join(' ');
  const description = seo.portfolio.description.join(' ');

  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
  };
}

export default async function Page({ params: { lng } }) {
  const tProjects = await getDictionary(lng, 'projects');
  return (
    <PageLayout avatar="ok" title={tProjects.title} lng={lng}>
      <Portfolio t={tProjects} lng={lng} data={Object.values(projectArr(tProjects))} />
    </PageLayout>
  );
}

Page.propTypes = {
  params: PropTypes.object.isRequired,
};
