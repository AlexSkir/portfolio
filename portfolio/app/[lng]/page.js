import React, { lazy } from 'react';
import PropTypes from 'prop-types';
import getDictionary from '../i18n/dictionaries';
import Home from './Home';

const PageLayout = lazy(() => import('./components/PageLayout'));

export default async function Page({ params: { lng } }) {
  const tHome = await getDictionary(lng, 'home');
  return (
    <PageLayout avatar="hi" title={tHome.title} lng={lng}>
      <Home t={tHome} />
    </PageLayout>
  );
}

Page.propTypes = {
  params: PropTypes.object.isRequired,
};
