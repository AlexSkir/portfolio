import React from 'react';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const PageLayout = ({ title, children }) => {
  return (
    <>
      <Box className="page-content__title">{title}</Box>
      <Container className="page-content__content">{children}</Container>
    </>
  );
};

PageLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default PageLayout;
