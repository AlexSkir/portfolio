import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function Row(props) {
  const { t } = useTranslation();
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell component="th" scope="row" sx={{ width: '90%', fontSize: '20px' }}>
          {row.name}
          <Link
            href={row.link}
            target="_blank"
            sx={{
              color: 'primary.contrastText',
              fontWeight: '400',
              textDecoration: 'underline',
              fontSize: '16px',
              ml: '10px',
            }}
          >
            {`(${t('projects.visit', { ns: 'projects' })})`}
          </Link>
        </TableCell>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow sx={{ backgroundColor: 'secondary.light' }}>
                    <TableCell sx={{ width: '70%', fontWeight: '500', fontSize: '20px' }}>
                      {t('projects.features', { ns: 'projects' })}
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ width: '30%', fontWeight: '500', fontSize: '20px' }}
                    >
                      {t('projects.library', { ns: 'projects' })}
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {row.features.map((featureRow) => (
                    <TableRow
                      key={featureRow.name}
                      sx={{ '&:nth-of-type(even)': { backgroundColor: 'primary.light' } }}
                    >
                      <TableCell>{featureRow.name}</TableCell>
                      <TableCell>{featureRow.library}</TableCell>
                    </TableRow>
                  ))}
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
    link: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        library: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};
