import React, { lazy } from 'react';
import PropTypes from 'prop-types';
import getDictionary from '../i18n/dictionaries';
import Home from './Home';
import PageLayout from './components/PageLayout';
import AvatarHi from './assets/avatar/avatar-hi.png';

export default async function Page({ params: { lng } }) {
  const tHome = await getDictionary(lng, 'home');
  return (
    <PageLayout avatar={AvatarHi} title={tHome.title} lng={lng}>
      <Home t={tHome} />
    </PageLayout>
  );
}

Page.propTypes = {
  params: PropTypes.object.isRequired,
};
