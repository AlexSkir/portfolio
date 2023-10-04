import React, { lazy } from 'react';
import PropTypes from 'prop-types';
import getDictionary from '../../i18n/dictionaries';
import Resume from './Resume';

const PageLayout = lazy(() => import('../components/PageLayout'));

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
