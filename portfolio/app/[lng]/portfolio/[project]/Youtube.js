'use client';

import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import LoadingBlock from '../../components/common/LoadingBlock';
import LoadingMore from '../../components/common/LoadingMore';

const Typography = lazy(() => import('../../components/Typography'));
const SimpleTable = lazy(() => import('./SimpleTable'));

export default function YoutubeApp(props) {
  const { more, title } = props;

  return (
    <>
      <Suspense fallback={<LoadingBlock width="200px" height="30px" marginBottom="20px" />}>
        <Typography variant="h6" classes="project-more__subtitle">
          {title}
        </Typography>
      </Suspense>
      <Suspense fallback={<LoadingMore />}>
        <SimpleTable features={more} />
      </Suspense>
    </>
  );
}

YoutubeApp.propTypes = {
  more: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};
