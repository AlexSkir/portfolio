'use client';

import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import CardMedia from '@mui/material/CardMedia';
import LoadingBlock from '../../components/common/LoadingBlock';

const CardContent = lazy(() => import('@mui/material/CardContent'));
const CardActions = lazy(() => import('@mui/material/CardActions'));
const Collapse = lazy(() => import('@mui/material/Collapse'));
const Typography = lazy(() => import('../../components/Typography'));

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Project(props) {
  const { data, children = '<></>' } = props;
  const { avatar, mainTool, name, type, image, technologies, description, links } = data;
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
      </div>
      <Suspense fallback={<LoadingBlock width="100%" height="100px" variant="rectangular" />}>
        <CardActions sx={{ p: '16px', flexDirection: 'row', flexWrap: 'wrap' }}>
          {links.map((item) => (
            <Link
              key={item.name}
              href={item.url}
              sx={{ p: '4px 10px', textTransform: 'uppercase' }}
              target="_blank"
            >
              <Typography variant="subtitle2" sx={{ color: 'secondary.dark' }}>
                {item.name}
              </Typography>
            </Link>
          ))}
          {data.more ? (
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
              sx={{ color: 'secondary.dark' }}
            >
              <ExpandMoreIcon className={expanded ? '' : 'bounce2'} />
            </ExpandMore>
          ) : (
            <></>
          )}
        </CardActions>
      </Suspense>
      <Suspense fallback={<LoadingBlock width="100%" height="200px" variant="rectangular" />}>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>{data.more}</CardContent>
        </Collapse>
      </Suspense>
    </div>
  );
}

Project.propTypes = {
  data: PropTypes.object.isRequired,
  children: PropTypes.node,
};
