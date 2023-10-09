import React from 'react';
import PropTypes from 'prop-types';
import getDictionary from '../../i18n/dictionaries';
import PageLayout from '../components/PageLayout';
import Portfolio from './Portfolio';

export default async function Page({ params: { lng } }) {
  const tProjects = await getDictionary(lng, 'projects');
  return (
    <PageLayout avatar="ok" title={tProjects.title} lng={lng}>
      <Portfolio t={tProjects} lng={lng} />
    </PageLayout>
  );
}

Page.propTypes = {
  params: PropTypes.object.isRequired,
};
