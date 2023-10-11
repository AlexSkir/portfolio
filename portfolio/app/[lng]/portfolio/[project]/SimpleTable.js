import React from 'react';
import PropTypes from 'prop-types';

export default function SimpleTable(props) {
  const { features } = props;
  return (
    <>
      <table className="simple-table__table" aria-label="features table">
        <tbody>
          {features.map((feature, i) => (
            <tr key={i} className="simple-table__row">
              <td className="simple-table__td">{feature}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

SimpleTable.propTypes = {
  features: PropTypes.array.isRequired,
};
