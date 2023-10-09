import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableBody from '@mui/material/TableBody';
import Row from './Row';

export default function CollapsibleTable(props) {
  const { features } = props;
  return (
    <>
      <TableContainer component={Paper} elevation={0}>
        <Table aria-label="collapsible features table">
          <TableBody>
            {features.map((feature) => (
              <Row key={feature.name} row={feature} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

CollapsibleTable.propTypes = {
  features: PropTypes.array.isRequired,
};
