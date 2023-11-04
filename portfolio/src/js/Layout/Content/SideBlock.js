import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import LoadingBlock from '../../common/LoadingBlock';

const MuiDrawer = lazy(() => import('@mui/material/Drawer'));
const Tooltip = lazy(() => import('@mui/material/Tooltip'));
const SocialIconsBlock = lazy(() => import('./SocialIconsBlock'));
const ContactBlock = lazy(() => import('./ContactBlock'));
const Typography = lazy(() => import('../../common/Typography'));
const Collapse = lazy(() => import('../../../assets/svg/Collapse.svg'));
const Expand = lazy(() => import('../../../assets/svg/Expand.svg'));

export default function SideBlock(props) {
  const { avatar } = props;
  const { t } = useTranslation();

  const localSt =
    typeof localStorage.getItem('sideBlockOpen') !== 'undefined'
      ? localStorage.getItem('sideBlockOpen') === 'true'
      : undefined;
  const screenWidth = typeof window !== 'undefined' ? window.screen.width > 1200 : true;
  const sideBlockOpen = localSt || screenWidth;
  const [open, setOpen] = React.useState(sideBlockOpen);

  const handleDrawerOpen = () => {
    setOpen(true);
    localStorage.setItem('sideBlockOpen', true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    localStorage.setItem('sideBlockOpen', false);
  };

  return (
    <div className="side-block-section">
      <Suspense
        fallback={
          <LoadingBlock
            width={open ? '400px' : '70px'}
            height="500px"
            variant="rectangular"
            marginRight={open ? '20px' : '1px'}
            borderRadius="20px"
            overflow="hidden"
          />
        }
      >
        <MuiDrawer
          className={`drawer-section__container ${open ? 'drawer_is-open' : 'drawer_is-closed'}`}
          variant="permanent"
        >
          <div className="drawer-section__header">
            {open ? (
              <Tooltip title={t('sideblock.closeBtnTooltip')}>
                <button type="button" onClick={handleDrawerClose}>
                  <Collapse className="drawer-section__collapse" />
                </button>
              </Tooltip>
            ) : (
              <Tooltip title={t('sideblock.openBtnTooltip')}>
                <button type="button" aria-label="open drawer" onClick={handleDrawerOpen}>
                  <Expand className="drawer-section__expand" />
                </button>
              </Tooltip>
            )}
          </div>

          <div style={{ marginTop: open ? '-130px' : '0' }}>
            <div
              className="side-block__avatar"
              style={{
                display: open ? 'block' : 'none',
              }}
            >
              {open ? (
                <Suspense
                  fallback={<LoadingBlock width="200px" height="200px" borderRadius="20px" />}
                >
                  <img src={avatar} alt="My avatar" width="200px" height="200px" />
                </Suspense>
              ) : (
                <></>
              )}
            </div>
          </div>

          <Suspense fallback={<LoadingBlock width="100%" height="30px" margin="15px 0" />}>
            <Typography
              variant="h4"
              align="center"
              classes={`side-block__name ${open ? 'is_block' : ''}`}
            >
              {t('sideblock.name')}
            </Typography>
          </Suspense>

          <Suspense fallback={<LoadingBlock width="100%" height="30px" />}>
            <Typography variant="body2" classes={`side-block__position ${open ? 'is_block' : ''}`}>
              {t('sideblock.position')}
            </Typography>
          </Suspense>

          <Suspense fallback={<LoadingBlock width="100%" height="50px" variant="rounded" />}>
            <SocialIconsBlock open={open} />
          </Suspense>

          <Suspense fallback={<LoadingBlock width="100%" height="350px" variant="rounded" />}>
            <ContactBlock
              open={open}
              phone={t('sideblock.items.phone')}
              address={t('sideblock.items.address')}
              location={t('sideblock.items.location')}
            />
          </Suspense>
        </MuiDrawer>
      </Suspense>
    </div>
  );
}

SideBlock.propTypes = {
  avatar: PropTypes.string.isRequired,
};
