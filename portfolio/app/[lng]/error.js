'use client';

// Error components must be Client Components

import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'next/navigation';
import PageLayout from './components/PageLayout';
import Typography from './components/Typography';

export default function Error({ error, reset }) {
  const { lng } = useParams();
  React.useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <PageLayout title="Error" lng={lng}>
      <div>
        <Typography variant="h3">Something went wrong!</Typography>
        <button
          className="not-found__button MyTypography MyTypography-button"
          type="button"
          style={{ margin: '20px 0' }}
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          <Typography variant="h4">Try again</Typography>
        </button>
      </div>
    </PageLayout>
  );
}
Error.propTypes = {
  error: PropTypes.object.isRequired,
  reset: PropTypes.func.isRequired,
};
