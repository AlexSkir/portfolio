import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import LoadingBlock from '../../components/common/LoadingBlock';
import LoadingMore from '../../components/common/LoadingMore';

const Row = lazy(() => import('./Row'));

export default function CollapsibleTable(props) {
  const { features } = props;

  return (
    <>
      <div>
        <Suspense fallback={<LoadingMore />}>
          <table className="collapsible-table__table" aria-label="features table">
            {features.map((feature) => (
              <Row key={feature.name} row={feature} />
            ))}
          </table>
        </Suspense>
      </div>
    </>
  );
}

CollapsibleTable.propTypes = {
  features: PropTypes.array.isRequired,
};
