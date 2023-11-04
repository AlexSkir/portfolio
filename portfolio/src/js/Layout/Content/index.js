import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import SideBlock from './SideBlock';
import LoadingBlock from '../../common/LoadingBlock';

const ShareBar = lazy(() => import('../../common/Share'));
const Typography = lazy(() => import('../../common/Typography'));

export default function PageLayout(props) {
  const { title, children, avatar } = props;

  return (
    <>
      <SideBlock avatar={avatar} />
      <div className="container-mainWrapper__content-wrapper">
        <div className="page-container__wrapper">
          <div className="page-container__ShareBar-wrapper">
            <Suspense fallback={<LoadingBlock width="70px" height="70px" />}>
              <ShareBar url="href" len={0} />
            </Suspense>
          </div>
          <div className="page-container__title-block">
            <Suspense fallback={<LoadingBlock width="100%" height="55px" />}>
              <Typography variant="h2" classes="page-container__title">
                {title}
              </Typography>
              <div className="page-container__divider" />
            </Suspense>
          </div>
          <div className="page-container__content">{children}</div>
        </div>
      </div>
    </>
  );
}

PageLayout.propTypes = {
  title: PropTypes.string.isRequired,
  avatar: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};
