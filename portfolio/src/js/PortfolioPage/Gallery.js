import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import LoadingBlock from '../common/LoadingBlock';

const Typography = lazy(() => import('../common/Typography'));

export default function GalleryItem(props) {
  const { path, image, name, type, tool } = props;
  return (
    <a href={`/portfolio/${path}`} className="project-gallery__item-link">
      <div className="project-gallery__item-image-wrapper">
        <Suspense fallback={<LoadingBlock width="100%" height="100%" />}>
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="project-gallery__item-image"
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Suspense>
      </div>
      <div className="project-gallery__item-bar">
        <Suspense fallback={<LoadingBlock width="100%" height="100%" />}>
          <Typography variant="subtitle2" component="h3" classes="project-gallery__title">
            {type}
          </Typography>
          <Typography variant="subtitle2" component="h4" classes="project-gallery__tools">
            {tool.join(` • `)}
          </Typography>
        </Suspense>
      </div>
    </a>
  );
}

GalleryItem.propTypes = {
  path: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  tool: PropTypes.array.isRequired,
};
