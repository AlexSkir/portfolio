import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import LoadingBlock from '../../common/LoadingBlock';
import LoadingMore from '../../common/LoadingMore';

const Typography = lazy(() => import('../../common/Typography'));
const SimpleTable = lazy(() => import('./SimpleTable'));
const More = lazy(() => import('../../../assets/svg/More.svg'));
const Collapse = lazy(() => import('@mui/material/Collapse'));
const IconButton = lazy(() => import('@mui/material/IconButton'));

export default function YoutubeApp(props) {
  const { more, title, links } = props;
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div className="project-card__card-actions">
        {links.map((item) => (
          <a
            className="project-card__action-link"
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noreferrer"
          >
            <Suspense fallback={<LoadingBlock width="100px" height="30px" />}>
              <Typography variant="subtitle2">{item.name}</Typography>
            </Suspense>
          </a>
        ))}
        <Suspense
          fallback={
            <LoadingBlock width="40px" height="40px" marginLeft="auto" variant="circular" />
          }
        >
          <IconButton
            className={`project-card__icon-button ${expanded ? 'is_expanded' : ''}`}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            sx={{ color: 'secondary.dark' }}
          >
            <More className={`MySvg-icon project-card__icon ${expanded ? '' : 'bounce2'}`} />
          </IconButton>
        </Suspense>
      </div>
      <Suspense fallback={<LoadingMore />}>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <div className="project-card__content-wrapper">
            <Suspense fallback={<LoadingBlock width="200px" height="30px" marginBottom="20px" />}>
              <Typography variant="h6" classes="project-more__subtitle">
                {title}
              </Typography>
            </Suspense>
            <Suspense fallback={<LoadingMore />}>
              <SimpleTable features={more} />
            </Suspense>
          </div>
        </Collapse>
      </Suspense>
    </>
  );
}

YoutubeApp.propTypes = {
  more: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired,
};
