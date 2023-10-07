import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import getDictionary from '../../i18n/dictionaries';
import Link from 'next/link';
import LoadingBlock from '../components/common/LoadingBlock';
import CallIcon from '../components/common/iconsJs/CallIconGradient';
import EmailIcon from '../components/common/iconsJs/EmailIconGradient';
import WhatsApp from '../assets/svg/Whatsapp.svg';
import Telegram from '../assets/svg/Telegram.svg';
import GitHub from '../assets/svg/gh-pages.svg';
import HeadHunter from '../assets/icons/hh.png';

import '../styles/Contact.scss';

const Typography = lazy(() => import('../components/Typography'));
const ContactItemCopieble = lazy(() => import('../components/common/ContactItemCopieble'));
const ContactItems = lazy(() => import('./ContactItems'));

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
      {/* <Form /> */}
    </>
  );
}

Contact.propTypes = {
  lng: PropTypes.string.isRequired,
};
