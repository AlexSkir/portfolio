import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SideBlock from './SideBlock';
import ShareBar from '../common/Share';

const contentWrapper = {
  backgroundColor: 'primary.paper',
  width: '100%',
  minWidth: '50%',
  height: 'auto',
  minHeight: '700px',
  position: 'relative',
  p: { xs: '15px', lg: '30px 50px 30px 70px' },
  borderRadius: { xs: '8px', sm: '20px' },
};

const PageLayout = (props) => {
  const { title, children, avatar } = props;
  return (
    <>
      <SideBlock avatar={avatar} />
      <Box className="container-mainWrapper__content-wrapper" sx={contentWrapper}>
        <Box
          className="container-mainWrapper__page-wrapper"
          sx={{ display: 'flex', flexDirection: 'column', height: '100%', position: 'relative' }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              button: {
                m: 0,
                backgroundColor: 'primary.paper',
                '&:hover': {
                  backgroundColor: 'primary.paper',
                },
              },
            }}
          >
            <ShareBar url={window.location.href} len={0} />
          </Box>
          <Box
            className="page-content__title"
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              height: '60px',
              mb: '10px',
              flexDirection: { xs: 'column', sm: 'row' },
            }}
          >
            <Typography
              variant="h2"
              component="h2"
              sx={{
                mr: '32px',
                textTransform: 'uppercase',
                textWrap: 'nowrap',
              }}
            >
              {title}
            </Typography>
            <Box className="page-content__divider" sx={{ mt: { xs: '10px', md: '0' } }} />
          </Box>
          <Box
            className="page-content__content"
            sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </>
  );
};

PageLayout.propTypes = {
  title: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  children: PropTypes.node,
};

PageLayout.defaultProps = {
  children: <></>,
};

export default PageLayout;
