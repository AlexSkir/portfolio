'use client';

import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useCookies } from 'react-cookie';
import LoadingBlock from '../common/LoadingBlock';

import avatarBase from '../../assets/avatar/avatar-base.png';
import avatarHeart from '../../assets/avatar/avatar-heart.png';
import avatarOk from '../../assets/avatar/avatar-ok.png';
import avatarHi from '../../assets/avatar/avatar-hi.png';
import avatar4042 from '../../assets/avatar/avatar-404.2.png';

const Avatar = lazy(() => import('./Avatar'));
const SocialIconsBlock = lazy(() => import('./SocialIconsBlock'));
const ContactBlock = lazy(() => import('./ContactBlock'));
const MuiDrawer = lazy(() => import('@mui/material/Drawer'));

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
  const { avatar, t } = props;
  const [avatarImg, setAvatar] = React.useState(avatarHi);
  const [cookies, setCookie] = useCookies(['sideBlockOpen']);

  const sideBlockOpen =
    typeof cookies.sideBlockOpen !== 'undefined'
      ? cookies.sideBlockOpen
      : window.screen.width > 1200;
  console.log(cookies.sideBlockOpen);
  const [open, setOpen] = React.useState(sideBlockOpen);

  const handleDrawerOpen = () => {
    setOpen(true);
    setCookie('sideBlockOpen', true, { path: '/' });
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setCookie('sideBlockOpen', false, { path: '/' });
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

  /* React.useEffect(() => {
    const sideBlockOpen =
      typeof cookies.sideBlockOpen !== 'undefined'
        ? cookies.sideBlockOpen
        : window.screen.width > 1200;
    console.log(cookies.sideBlockOpen);
    setOpen(sideBlockOpen);
  }); */

  return (
    <Box className="side-block-section" sx={{ display: { xs: 'none', md: 'block' } }}>
      <Suspense
        fallback={
          <LoadingBlock width={open ? '400px' : '70px'} height="500px" variant="rectangular" />
        }
      >
        <Drawer variant="permanent" open={open}>
          <DrawerHeader
            sx={{
              position: 'absolute',
              top: { xs: '10px', lg: '30px' },
              right: 0,
            }}
          >
            {open ? (
              <Tooltip title={t('sideblock.closeBtnTooltip')}>
                <IconButton onClick={handleDrawerClose}>
                  <ChevronLeftIcon
                    sx={{ color: 'secondary.dark', width: '40px', height: '40px' }}
                  />
                </IconButton>
              </Tooltip>
            ) : (
              <Tooltip title={t('sideblock.openBtnTooltip')}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                >
                  <ChevronRightIcon
                    sx={{ color: 'secondary.main', width: '40px', height: '40px' }}
                  />
                </IconButton>
              </Tooltip>
            )}
          </DrawerHeader>

          <Box sx={{ mt: open ? '-130px' : '0' }}>
            <Suspense fallback={<LoadingBlock width="200px" height="200px" variant="rounded" />}>
              <Avatar img={avatarImg} open={open} />
            </Suspense>
          </Box>

          <Typography
            variant="h4"
            component="h4"
            align="center"
            sx={{ m: '15px 0', display: open ? 'block' : 'none' }}
          >
            {t('sideblock.name')}
          </Typography>
          <Typography variant="body2" sx={{ opacity: '0.5', display: open ? 'block' : 'none' }}>
            {t('sideblock.position')}
          </Typography>

          <Suspense fallback={<LoadingBlock width="100%" height="50px" variant="rounded" />}>
            <SocialIconsBlock open={open} />
          </Suspense>

          <Suspense fallback={<LoadingBlock width="100%" height="350px" variant="rounded" />}>
            <ContactBlock open={open} />
          </Suspense>
        </Drawer>
      </Suspense>
    </Box>
  );
}

SideBlock.propTypes = {
  avatar: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
};
