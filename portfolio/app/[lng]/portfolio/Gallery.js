/* eslint-disable react/jsx-wrap-multilines */
import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import LoadingBlock from '../components/common/LoadingBlock';

const Typography = lazy(() => import('../components/Typography'));
const Image = lazy(() => import('next/image'));

export default function GalleryItem(props) {
  const { path, image, name, type, tool, lng } = props;
  return (
    <Link href={`/${lng}/portfolio/${path}`} className="project-gallery__item-link" target="_blank">
      <div className="project-gallery__item-image-wrapper">
        <Suspense fallback={<LoadingBlock width="100%" height="100%" />}>
          <Image
            src={image}
            alt={name}
            className="project-gallery__item-image"
            placeholder="blur"
          />
        </Suspense>
      </div>
      <div className="project-gallery__item-bar">
        <Suspense fallback={<LoadingBlock width="100%" height="100%" />}>
          <Typography variant="subtitle2" classes="project-gallery__title">
            {type}
          </Typography>
          <Typography variant="subtitle2" classes="project-gallery__tools">
            {tool.join(` • `)}
          </Typography>
        </Suspense>
      </div>
    </Link>
  );
}

GalleryItem.propTypes = {
  path: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  tool: PropTypes.array.isRequired,
  lng: PropTypes.string.isRequired,
};
