'use client';

// Error components must be Client Components

import React from 'react';
import PropTypes from 'prop-types';

export default function GlobalError({ error, reset }) {
  return (
    <html lang="en">
      <body>
        <h2>Something went wrong!</h2>
        <button type="button" onClick={() => reset()}>
          Try again
        </button>
      </body>
    </html>
  );
}
GlobalError.propTypes = {
  error: PropTypes.object,
  reset: PropTypes.func,
};
