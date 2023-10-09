import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import getDictionary from '../../i18n/dictionaries';
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
        <div className="contact-page__name-wrapper">
          <Suspense fallback={<LoadingBlock width="100%" height="35px" />}>
            <Typography variant="h4" align="left" component="h3">
              {tContact.name}
            </Typography>
          </Suspense>
        </div>

        <div className="contact-page__name-wrapper">
          <Suspense fallback={<LoadingBlock width="100%" height="35px" />}>
            <Typography variant="h6" classes="contact-page__position" component="h4">
              {tContact.position}
            </Typography>
          </Suspense>
        </div>
      </div>
      <Suspense fallback={<LoadingBlock width="100%" height="300px" />}>
        <ContactItems t={tContact} />
      </Suspense>
      <Suspense fallback={<LoadingBlock width="100%" height="300px" />}>
        <Form t={tContact} />
      </Suspense>
    </>
  );
}

Contact.propTypes = {
  lng: PropTypes.string.isRequired,
};
