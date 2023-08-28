import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MuiDrawer from '@mui/material/Drawer';
import { styled, useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import Avatar from './Avatar';
import SocialIconsBlock from './SocialIconsBlock';
import ContactBlock from './ContactBlock';
import avatarBase from '../../assets/images/avatar-base.png';
import avatarHeart from '../../assets/images/avatar-heart.png';
import avatarOk from '../../assets/images/avatar-ok.png';
import avatarHi from '../../assets/images/avatar-hi.png';
import avatar4042 from '../../assets/images/avatar-404.2.png';

const openedMixin = (theme) => ({
  position: 'relative',
  width: '400px',
  height: '100%',
  padding: '30px',
  marginRight: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  overflowX: 'visible',
  overflowY: 'visible',
  borderRadius: '20px',
  backgroundColor: theme.palette.primary.paper,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
});
const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  position: 'relative',
  overflowX: 'hidden',
  width: '70px',
  height: '100%',
  backgroundColor: theme.palette.primary.paper,
  overflowY: 'visible',
  padding: '0',
  marginRight: '0',
  borderRadius: '20px',
});
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    position: 'relative',
    height: '100%',
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    overflowX: 'clip',
    ...(open && {
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function SideBlock(props) {
  const { avatar } = props;
  const [avatarImg, setAvatar] = React.useState(avatarHi);
  const [open, setOpen] = React.useState(window.screen.width > 1200);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    if (avatar === 'base') {
      setAvatar(avatarBase);
    } else if (avatar === 'ok') {
      setAvatar(avatarOk);
    } else if (avatar === 'heart') {
      setAvatar(avatarHeart);
    } else if (avatar === 'hi') {
      setAvatar(avatarHi);
    } else {
      setAvatar(avatar4042);
    }
  });

  return (
    <Box className="side-block-section" sx={{ display: { xs: 'none', md: 'block' } }}>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader sx={{ position: 'absolute', top: '10px', right: 0 }}>
          {open ? (
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon sx={{ color: 'secondary.dark', width: '40px', height: '40px' }} />
            </IconButton>
          ) : (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
            >
              <ChevronRightIcon sx={{ color: 'secondary.main', width: '40px', height: '40px' }} />
            </IconButton>
          )}
        </DrawerHeader>
        <Avatar img={avatarImg} open={open} />
        <Typography
          variant="h4"
          component="h4"
          align="center"
          sx={{ m: '15px 0', display: open ? 'block' : 'none' }}
        >
          Aleksandra Skirnevskaia
        </Typography>
        <Typography variant="body2" sx={{ opacity: '0.5', display: open ? 'block' : 'none' }}>
          Frontend Developer
        </Typography>
        <SocialIconsBlock open={open} />
        <ContactBlock open={open} />
      </Drawer>
    </Box>
  );
}

SideBlock.propTypes = {
  avatar: PropTypes.string.isRequired,
};
