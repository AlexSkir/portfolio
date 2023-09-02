import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  const rowStyle = {
    backgroundColor: open ? 'secondary.light' : '',
  };

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' }, ...rowStyle }}>
        <TableCell
          component="th"
          scope="row"
          sx={{
            width: { xs: '100%', sm: '70%' },
            fontSize: { xs: '14px', md: '20px' },
            lineHeight: { xs: '20px', md: '30px' },
          }}
        >
          {row.name}
          {row.link ? (
            <Link
              href={row.link.url}
              target="_blank"
              sx={{
                color: 'primary.contrastText',
                fontWeight: '400',
                textDecoration: 'underline',
                fontSize: { xs: '12px', md: '16px' },
                lineHeight: { xs: '20px', md: '30px' },
                ml: '10px',
              }}
            >
              {`(${row.link.title})`}
            </Link>
          ) : (
            <></>
          )}
        </TableCell>
        <TableCell
          component="th"
          scope="row"
          sx={{
            width: '20%',
            fontSize: { xs: '14px', md: '20px' },
            display: { xs: 'none', sm: 'table-cell' },
          }}
        >
          {open ? row.type : ''}
        </TableCell>
        <TableCell component="th" scope="row">
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ padding: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="features">
                <TableBody>
                  {row.features.map((featureRow) => {
                    if (featureRow.library) {
                      return (
                        <TableRow
                          key={featureRow.name}
                          sx={{
                            '&:nth-of-type(even)': { backgroundColor: 'primary.light' },
                            display: { xs: 'flex', sm: 'table-row' },
                            flexDirection: 'column',
                          }}
                        >
                          <TableCell
                            sx={{
                              width: { xs: '100%', sm: '70%' },
                              fontSize: { xs: '14px', md: '20px' },
                              lineHeight: { xs: '20px', md: '30px' },
                            }}
                          >
                            {featureRow.name}
                          </TableCell>
                          <TableCell
                            sx={{
                              width: { xs: '100%', sm: '30%' },
                              fontSize: { xs: '14px', md: '20px' },
                              lineHeight: { xs: '20px', md: '30px' },
                            }}
                          >
                            {featureRow.library}
                          </TableCell>
                        </TableRow>
                      );
                    }
                    if (featureRow.link) {
                      return (
                        <TableRow
                          key={featureRow.name}
                          sx={{
                            '&:nth-of-type(even)': { backgroundColor: 'primary.light' },
                            display: { xs: 'flex', sm: 'table-cell' },
                            flexDirection: 'column',
                          }}
                        >
                          <TableCell
                            sx={{
                              width: { xs: '100%', sm: '70%' },
                              fontSize: { xs: '14px', md: '20px' },
                              lineHeight: { xs: '20px', md: '30px' },
                            }}
                          >
                            {featureRow.name}
                          </TableCell>
                          <TableCell
                            sx={{
                              width: { xs: '100%', sm: '30%' },
                              fontSize: { xs: '14px', md: '20px' },
                              lineHeight: { xs: '20px', md: '30px' },
                            }}
                          >
                            <Link
                              sx={{ color: 'primary.contrastText', textDecoration: 'underline' }}
                              href={featureRow.link.href}
                              target="_blank"
                            >
                              {featureRow.link.name}
                            </Link>
                          </TableCell>
                        </TableRow>
                      );
                    }
                    return (
                      <TableRow
                        key={featureRow.name}
                        sx={{ '&:nth-of-type(even)': { backgroundColor: 'primary.light' } }}
                      >
                        <TableCell
                          sx={{
                            width: '100%',
                            fontSize: { xs: '14px', md: '20px' },
                            lineHeight: { xs: '20px', md: '30px' },
                          }}
                        >
                          {featureRow.name}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.shape({
      title: PropTypes.string,
      url: PropTypes.string,
    }),
    type: PropTypes.string,
    features: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        library: PropTypes.string,
      }),
    ).isRequired,
  }).isRequired,
};
