import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

const avatarBlock = {
  width: '200px',
  height: '200px',
  backgroundColor: 'secondary.main',
  mt: '-100px',
  boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
};

export default function Avatar(props) {
  const { img, open } = props;
  return (
    <Box
      className="side-block__avatar border-radius-20"
      sx={{ ...avatarBlock, backgroundImage: `url(${img})`, display: open ? 'block' : 'none' }}
    />
  );
}

Avatar.propTypes = {
  img: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
};
