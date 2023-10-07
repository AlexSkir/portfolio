import React from 'react';
import PropTypes from 'prop-types';
import getDictionary from '../../i18n/dictionaries';
import PageLayout from '../components/PageLayout';
import Contact from './Contact';

export default async function Page({ params: { lng } }) {
  const tContact = await getDictionary(lng, 'contact');
  return (
    <PageLayout avatar="heart" title={tContact.title} lng={lng}>
      <Contact lng={lng} />
    </PageLayout>
  );
}

Page.propTypes = {
  params: PropTypes.object.isRequired,
};
