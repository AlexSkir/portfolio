import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

export default function SimpleTable(props) {
  const { features } = props;
  return (
    <>
      <TableContainer component={Paper} elevation={0}>
        <Table aria-label="features table">
          <TableBody>
            {features.map((feature) => (
              <TableRow
                key={feature}
                sx={{ '&:nth-of-type(odd)': { backgroundColor: 'primary.light' } }}
              >
                <TableCell component="td" scope="row">
                  {feature}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

SimpleTable.propTypes = {
  features: PropTypes.array.isRequired,
};
