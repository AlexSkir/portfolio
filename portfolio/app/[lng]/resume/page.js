import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import getDictionary from '../../i18n/dictionaries';
import LoadingBlock from '../components/common/LoadingBlock';

const PageLayout = lazy(() => import('../components/PageLayout'));
const Resume = lazy(() => import('./Resume'));

export default async function Page({ params: { lng } }) {
  const tResume = await getDictionary(lng, 'resume');
  return (
    <PageLayout avatar="base" title={tResume.title} lng={lng}>
      <Suspense fallback={<LoadingBlock width="100%" height="300px" variant="rectangular" />}>
        <Resume t={tResume} lng={lng} />
      </Suspense>
    </PageLayout>
  );
}

Page.propTypes = {
  params: PropTypes.object.isRequired,
};
