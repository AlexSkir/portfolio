import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import getDictionary from '../../i18n/dictionaries';
import LoadingBlock from '../components/common/LoadingBlock';
import PageLayout from '../components/PageLayout';

const Resume = lazy(() => import('./Resume'));

export default async function Page({ params: { lng } }) {
  const tResume = await getDictionary(lng, 'resume');
  return (
    <PageLayout avatar="base" title={tResume.title} lng={lng}>
      <Resume t={tResume} lng={lng} />
    </PageLayout>
  );
}

Page.propTypes = {
  params: PropTypes.object.isRequired,
};
