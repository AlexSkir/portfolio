'use client';

import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { useCookies } from 'react-cookie';
import Tooltip from '@mui/material/Tooltip';
import Collapse from '../../assets/svg/Collapse.svg';
import Expand from '../../assets/svg/Expand.svg';
import Typography from '../Typography';
import LoadingBlock from '../common/LoadingBlock';

const Avatar = lazy(() => import('./Avatar'));
const SocialIconsBlock = lazy(() => import('./SocialIconsBlock'));
const ContactBlock = lazy(() => import('./ContactBlock'));
const MuiDrawer = lazy(() => import('@mui/material/Drawer'));

export default function SideBlock(props) {
  const { avatar, t } = props;
  const [cookies, setCookie] = useCookies(['sideBlockOpen']);

  let sideBlockOpen = typeof window !== 'undefined' ? window.screen.width > 1200 : true;
  sideBlockOpen = typeof cookies.sideBlockOpen !== 'undefined' ? cookies.sideBlockOpen : true;
  const [open, setOpen] = React.useState(sideBlockOpen);

  const handleDrawerOpen = () => {
    setOpen(true);
    setCookie('sideBlockOpen', true, { path: '/' });
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setCookie('sideBlockOpen', false, { path: '/' });
  };

  return (
    <div className="side-block-section">
      <Suspense
        fallback={
          <LoadingBlock width={open ? '400px' : '70px'} height="500px" variant="rectangular" />
        }
      >
        <MuiDrawer
          className={`drawer-section__container ${open ? 'drawer_is-open' : 'drawer_is-closed'}`}
          variant="permanent"
        >
          <div className="drawer-section__header">
            {open ? (
              <Tooltip title={t.sideblock.closeBtnTooltip}>
                <button type="button" onClick={handleDrawerClose}>
                  <Collapse className="drawer-section__collapse" />
                </button>
              </Tooltip>
            ) : (
              <Tooltip title={t.sideblock.openBtnTooltip}>
                <button type="button" aria-label="open drawer" onClick={handleDrawerOpen}>
                  <Expand className="drawer-section__expand" />
                </button>
              </Tooltip>
            )}
          </div>

          <div style={{ marginTop: open ? '-130px' : '0' }}>
            <Suspense fallback={<LoadingBlock width="200px" height="200px" variant="rounded" />}>
              <Avatar avatar={avatar} open={open} />
            </Suspense>
          </div>

          <Typography
            variant="h4"
            align="center"
            classes={`side-block__name ${open ? 'is_block' : ''}`}
          >
            {t.sideblock.name}
          </Typography>
          <Typography variant="body2" classes={`side-block__position ${open ? 'is_block' : ''}`}>
            {t.sideblock.position}
          </Typography>

          <Suspense fallback={<LoadingBlock width="100%" height="50px" variant="rounded" />}>
            <SocialIconsBlock open={open} />
          </Suspense>

          <Suspense fallback={<LoadingBlock width="100%" height="350px" variant="rounded" />}>
            <ContactBlock open={open} />
          </Suspense>
        </MuiDrawer>
      </Suspense>
    </div>
  );
}

SideBlock.propTypes = {
  avatar: PropTypes.string.isRequired,
  t: PropTypes.object.isRequired,
};
