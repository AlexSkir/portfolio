import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import SocialIconsBlock from './SocialIconsBlock';
import ContactBlock from './ContactBlock';
import avatarBase from '../../assets/images/avatar-base.png';
import avatarHeart from '../../assets/images/avatar-heart.png';
import avatarOk from '../../assets/images/avatar-ok.png';
import avatarHi from '../../assets/images/avatar-hi.png';

const sectionWrapper = {
  width: { xs: '100%', md: '400px' },
  minWidth: { xs: '100%', md: '400px' },
  height: 'auto',
  minHeight: { xs: '200px', md: '700px' },
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: 'primary.paper',
  mr: '20px',
  mb: { xs: '20px', md: 0 },
  p: { xs: '20px', md: '30px' },
};

const avatarBlock = {
  width: '200px',
  height: '200px',
  backgroundColor: 'secondary.main',
  mt: '-100px',
  boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  display: { xs: 'none', md: 'block' },
};

export default function SideBlock({ location: { pathname } }) {
  const [avatar, setAvatar] = React.useState(avatarHi);

  React.useEffect(() => {
    if (pathname === '/Resume') {
      setAvatar(avatarBase);
    } else if (pathname === '/Work') {
      setAvatar(avatarOk);
    } else if (pathname === '/Contact') {
      setAvatar(avatarHeart);
    } else {
      setAvatar(avatarHi);
    }
  });

  return (
    <Box className="side-block-section border-radius-20" sx={sectionWrapper}>
      <Box
        className="side-block__avatar border-radius-20"
        sx={{ ...avatarBlock, backgroundImage: `url(${avatar})` }}
      />
      <Typography variant="h4" component="h4" align="center" sx={{ m: '15px 0' }}>
        Aleksandra Skirnevskaia
      </Typography>
      <Typography variant="body2" sx={{ opacity: '0.5' }}>
        Frontend Developer
      </Typography>
      <SocialIconsBlock />
      <ContactBlock />
    </Box>
  );
}

SideBlock.propTypes = {
  location: PropTypes.object.isRequired,
};
