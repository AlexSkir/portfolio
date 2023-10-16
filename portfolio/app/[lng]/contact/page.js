import React from 'react';
import PropTypes from 'prop-types';
import getDictionary from '../../i18n/dictionaries';
import PageLayout from '../components/PageLayout';
import Contact from './Contact';
import '../styles/Contact.scss';

export async function generateMetadata({ params }) {
  const { lng } = params;
  const seo = await getDictionary(lng, 'seo');

  return {
    title: seo.contact.title,
    description: seo.contact.description.join(' '),
    openGraph: {
      title: seo.contact.title,
      description: seo.contact.description.join(' '),
    },
  };
}

export default async function Page({ params: { lng } }) {
  const tContact = await getDictionary(lng, 'contact');
  return (
    <PageLayout title={tContact.title} lng={lng}>
      <Contact lng={lng} />
    </PageLayout>
  );
}

Page.propTypes = {
  params: PropTypes.object.isRequired,
};
