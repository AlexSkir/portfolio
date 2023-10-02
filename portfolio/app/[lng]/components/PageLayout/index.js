import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import SideBlock from './SideBlock';
// import ShareBar from '../common/Share';
// import Typography from '../Typography';
import getDictionary from '../../../i18n/dictionaries';
import LoadingBlock from '../common/LoadingBlock';

const ShareBar = lazy(() => import('../common/Share'));
const Typography = lazy(() => import('../Typography'));

export default async function PageLayout(props) {
  const { title, children, avatar, lng } = props;
  const t = await getDictionary(lng);

  return (
    <>
      <SideBlock avatar={avatar} t={t} />
      <div className="container-mainWrapper__content-wrapper">
        <div className="page-container__wrapper">
          <div className="page-container__ShareBar-wrapper">
            <Suspense fallback={<LoadingBlock width="70px" height="70px" />}>
              <ShareBar url={typeof window !== 'undefined' ? window.location.href : ''} len={0} />
            </Suspense>
          </div>
          <Suspense fallback={<LoadingBlock width="100%" height="55px" />}>
            <div className="page-container__title-block">
              <Typography variant="h2" classes="page-container__title">
                {title}
              </Typography>
              <div className="page-container__divider" />
            </div>
          </Suspense>
          <div className="page-container__content">{children}</div>
        </div>
      </div>
    </>
  );
}

PageLayout.propTypes = {
  title: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  lng: PropTypes.string.isRequired,
};
