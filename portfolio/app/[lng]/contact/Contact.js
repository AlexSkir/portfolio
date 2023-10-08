import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import getDictionary from '../../i18n/dictionaries';
import Link from 'next/link';
import LoadingBlock from '../components/common/LoadingBlock';

import '../styles/Contact.scss';

const Typography = lazy(() => import('../components/Typography'));
const ContactItems = lazy(() => import('./ContactItems'));
const Form = lazy(() => import('./Form'));

export default async function Contact(props) {
  const { lng } = props;
  const tContact = await getDictionary(lng, 'contact');
  return (
    <>
      <div className="contact-page__section">
        <Typography variant="h4" align="left" classes="contact-page__name">
          {tContact.name}
        </Typography>
        <Typography variant="h6" classes="contact-page__position">
          {tContact.position}
        </Typography>
      </div>
      <ContactItems t={tContact} />
      <Form t={tContact} />
    </>
  );
}

Contact.propTypes = {
  lng: PropTypes.string.isRequired,
};
