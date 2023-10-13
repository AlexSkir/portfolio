'use client';

import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { useCookies } from 'react-cookie';
import Image from 'next/image';
import LoadingBlock from '../common/LoadingBlock';

const MuiDrawer = lazy(() => import('@mui/material/Drawer'));
const Tooltip = lazy(() => import('@mui/material/Tooltip'));
const SocialIconsBlock = lazy(() => import('./SocialIconsBlock'));
const ContactBlock = lazy(() => import('./ContactBlock'));
const Typography = lazy(() => import('../Typography'));
const Collapse = lazy(() => import('../../assets/svg/Collapse.svg'));
const Expand = lazy(() => import('../../assets/svg/Expand.svg'));

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
              <div
                className="side-block__avatar"
                style={{
                  display: open ? 'block' : 'none',
                }}
              >
                <Image
                  src={avatar}
                  alt="My avatar"
                  width={200}
                  height={200}
                  placeholder="blur"
                  priority
                />
              </div>
            </Suspense>
          </div>

          <Suspense fallback={<LoadingBlock width="100%" height="30px" margin="15px 0" />}>
            <Typography
              variant="h4"
              align="center"
              classes={`side-block__name ${open ? 'is_block' : ''}`}
            >
              {t.sideblock.name}
            </Typography>
          </Suspense>

          <Suspense fallback={<LoadingBlock width="100%" height="30px" />}>
            <Typography variant="body2" classes={`side-block__position ${open ? 'is_block' : ''}`}>
              {t.sideblock.position}
            </Typography>
          </Suspense>

          <Suspense fallback={<LoadingBlock width="100%" height="50px" variant="rounded" />}>
            <SocialIconsBlock open={open} />
          </Suspense>

          <Suspense fallback={<LoadingBlock width="100%" height="350px" variant="rounded" />}>
            <ContactBlock
              open={open}
              phone={t.sideblock.items.phone}
              address={t.sideblock.items.address}
              location={t.sideblock.items.location}
            />
          </Suspense>
        </MuiDrawer>
      </Suspense>
    </div>
  );
}

SideBlock.propTypes = {
  avatar: PropTypes.object.isRequired,
  t: PropTypes.object.isRequired,
};
