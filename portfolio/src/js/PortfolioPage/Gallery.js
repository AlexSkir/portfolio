import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

function ProjectsListGallery(props) {
  const { itemData } = props;
  return (
    <ImageList
      cols={1}
      rowHeight={265}
      sx={{
        width: { xs: '300px', lg: '700px' },
        height: '500px',
        overflowY: 'scroll',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: { xs: 'center', lg: 'space-between' },
      }}
    >
      {itemData.map((item) => (
        <Link key={item.name} href={`/Portfolio/${item.path}`}>
          <ImageListItem
            className="projects-list__item-wrapper"
            sx={{ p: '8px', mb: '15px', borderRadius: '8px', width: { xs: '300px', lg: '330px' } }}
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
              title={item.description}
              subtitle={item.technologies.join(` • `)}
            />
          </ImageListItem>
        </Link>
      ))}
    </ImageList>
  );
}

ProjectsListGallery.propTypes = {
  itemData: PropTypes.array.isRequired,
};

export default ProjectsListGallery;
