import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import LoadingBlock from '../../components/common/LoadingBlock';

const Typography = lazy(() => import('../../components/Typography'));

export default function Project(props) {
  const { data } = props;
  const { avatar, mainTool, name, type, image, technologies, description, links } = data;

  return (
    <div className="project-card__container">
      <div className="project-card__header">
        <div className="project-card__avatar-wrapper">
          <Image src={avatar} alt={mainTool} sizes="50px" placeholder="blur" priority fill />
        </div>
        <div className="project-card__title-wrapper">
          <Suspense fallback={<LoadingBlock width="200px" height="30px" />}>
            <Typography variant="body2" component="h2" classes="project-card__title">
              {name}
            </Typography>
          </Suspense>
          <Suspense fallback={<LoadingBlock width="200px" height="30px" />}>
            <Typography variant="body2" component="h3" classes="project-card__subtitle">
              {type}
            </Typography>
          </Suspense>
        </div>
      </div>
      <div className="project-card__image-wrapper">
        <Image src={image} alt={name} placeholder="blur" priority fill />
      </div>
      <div className="project-card__content-wrapper">
        <Suspense fallback={<LoadingBlock width="100%" height="50px" margin="10px 0" />}>
          <Typography variant="h5" classes="project-card__content-title">
            {technologies.join(' • ')}
          </Typography>
        </Suspense>
        {data.warning ? (
          <Suspense fallback={<LoadingBlock width="100%" height="40px" margin="10px 0" />}>
            <Typography variant="body3" classes="project-card__warning">
              {data.warning}
            </Typography>
          </Suspense>
        ) : (
          <></>
        )}
        <Suspense fallback={<LoadingBlock width="100%" height="90px" margin="10px 0" />}>
          <Typography variant="body2">{description}</Typography>
        </Suspense>
        {data.more1 ? (
          <Suspense fallback={<LoadingBlock width="100%" height="30px" margin="10px 0" />}>
            <Typography variant="body2">{data.more1}</Typography>
          </Suspense>
        ) : (
          <></>
        )}
      </div>

      {data.more ? (
        data.more
      ) : (
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
        </div>
      )}
    </div>
  );
}

Project.propTypes = {
  data: PropTypes.object.isRequired,
};
