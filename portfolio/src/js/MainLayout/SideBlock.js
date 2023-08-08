import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

import Typography from '../common/typography';
import SocialIconsBlock from './SocialIconsBlock';
import ContactBlock from './ContactBlock';
import avatarBase from '../../assets/images/avatar-base.png';
import avatarHeart from '../../assets/images/avatar-heart.png';
import avatarOk from '../../assets/images/avatar-ok.png';
import avatarHi from '../../assets/images/avatar-hi.png';

const sectionWrapper = {
  width: '400px',
  minWidth: '400px',
  height: '700px',
  display: { xs: 'none', md: 'flex' },
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: 'primary.lighter',
  mr: '20px',
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
      <Typography variant="h4" component="h4" sx={{ m: '15px 0' }}>
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
