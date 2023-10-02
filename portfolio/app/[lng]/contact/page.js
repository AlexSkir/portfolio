'use client';

import React from 'react';
import PropTypes from 'prop-types';

import useTranslation from '../../i18n/client';
import Contact from './Contact';

export default function Page({ params }) {
  const { lng } = params;
  const { t } = useTranslation(lng, 'contact');
  return <Contact lng={lng} t={t} />;
}

Page.propTypes = {
  params: PropTypes.object.isRequired,
};
