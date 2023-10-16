import React from 'react';
import PropTypes from 'prop-types';
import getDictionary from '../../i18n/dictionaries';
import PageLayout from '../components/PageLayout';
import Resume from './Resume';
import '../styles/Resume.scss';

export async function generateMetadata({ params }) {
  const { lng } = params;
  const seo = await getDictionary(lng, 'seo');

  return {
    title: seo.resume.title,
    description: seo.resume.description.join(' '),
    openGraph: {
      title: seo.resume.title,
      description: seo.resume.description.join(' '),
    },
  };
}

export default async function Page({ params: { lng } }) {
  const tResume = await getDictionary(lng, 'resume');
  return (
    <PageLayout title={tResume.title} lng={lng}>
      <Resume t={tResume} lng={lng} />
    </PageLayout>
  );
}

Page.propTypes = {
  params: PropTypes.object.isRequired,
};
