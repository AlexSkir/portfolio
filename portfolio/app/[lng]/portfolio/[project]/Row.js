import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import LoadingBlock from '../../components/common/LoadingBlock';
import LoadingMore from '../../components/common/LoadingMore';

const IconButton = lazy(() => import('@mui/material/IconButton'));
const More = lazy(() => import('../../assets/svg/More.svg'));
const Collapse = lazy(() => import('@mui/material/Collapse'));

export default function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <thead>
        <tr className={`collapsible-table__summary-row ${open ? 'is_open' : ''}`}>
          <th className="collapsible-table__heading collapsible-table__title">
            {row.name}
            {row.link ? (
              <a
                href={row.link.url}
                className="collapsible-table__heading-link"
                target="_blank"
                rel="noreferrer"
              >
                {`(${row.link.title})`}
              </a>
            ) : (
              <></>
            )}
          </th>
          <th className="collapsible-table__heading collapsible-table__extra">
            {open ? row.type : ''}
          </th>
          <th className="collapsible-table__heading collapsible-table__more">
            <Suspense fallback={<LoadingBlock width="34px" height="34px" variant="circular" />}>
              <IconButton
                className="collapsible-table__more-button"
                aria-label="expand row"
                size="small"
                onClick={() => setOpen(!open)}
              >
                <More className="MySvg-icon table__more-icon" />
              </IconButton>
            </Suspense>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr className="collapsible-table__features-row">
          <td colSpan={6} className="collapsible-table__features-td">
            <Suspense fallback={<LoadingMore />}>
              <Collapse in={open} timeout="auto" unmountOnExit sx={{ margin: '8px' }}>
                <table
                  className="simple-table__table simple-table__collapsible"
                  aria-label="features table"
                >
                  <tbody>
                    {row.features.map((feature, i) => (
                      <tr key={i} className="simple-table__row">
                        <td className="simple-table__td">{feature.name}</td>
                        {feature.library ? (
                          <td className="simple-table__td td_library">{feature.library}</td>
                        ) : (
                          <></>
                        )}
                        {feature.link ? (
                          <td className="simple-table__td td_link">
                            <a
                              className="simple-table__link"
                              href={feature.link.href}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {feature.link.name}
                            </a>
                          </td>
                        ) : (
                          <></>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Collapse>
            </Suspense>
          </td>
        </tr>
      </tbody>
    </>
  );
}

Row.propTypes = {
  row: PropTypes.object.isRequired,
};
