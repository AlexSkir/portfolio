import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ImageList from '@mui/material/ImageList';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Typography from '@mui/material/Typography';
import LoadingBlock from '../Suspense/LoadingBlock';

const ImageListItem = lazy(() => import('@mui/material/ImageListItem'));

const subt2 = {
  fontSize: '14px',
  fontWeight: '400',
  opacity: '0.5',
};

function ProjectsListGallery(props) {
  const { itemData } = props;
  return (
    <ImageList
      cols={1}
      rowHeight={265}
      sx={{
        width: '100%',
        overflowY: 'visible',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
      }}
    >
      {itemData.map((item) => (
        <Link
          key={item.name}
          href={`/portfolio/${item.path}`}
          sx={{ width: { xs: '300px', lg: '330px' } }}
        >
          <Suspense fallback={<LoadingBlock width="100%" height="200px" variant="rectangular" />}>
            <ImageListItem
              className="projects-list__item-wrapper"
              sx={{
                p: '8px',
                mb: '15px',
                borderRadius: '8px',
                width: '100%',
                backgroundColor: '#FFF4E5',
              }}
            >
              <Box
                loading="lazy"
                sx={{
                  width: '100%',
                  height: '75%',
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'cover',
                }}
              />
              <ImageListItemBar
                position="below"
                title={
                  <Typography variant="subtitle2" sx={subt2}>
                    {item.type}
                  </Typography>
                }
                subtitle={
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontWeight: '400',
                      whiteSpace: 'wrap',
                    }}
                  >
                    {item.mainTool.join(` • `)}
                  </Typography>
                }
              />
            </ImageListItem>
          </Suspense>
        </Link>
      ))}
    </ImageList>
  );
}

ProjectsListGallery.propTypes = {
  itemData: PropTypes.array.isRequired,
};

export default ProjectsListGallery;
