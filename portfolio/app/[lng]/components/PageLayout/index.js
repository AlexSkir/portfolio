'use client';

import React from 'react';
import PropTypes from 'prop-types';
import SideBlock from './SideBlock';
import ShareBar from '../common/Share';
import { useTranslation } from '../../../i18n/client';
import Typography from '../Typography';

const PageLayout = (props) => {
  const { title, children, avatar, lng } = props;
  const { t } = useTranslation(lng);

  return (
    <>
      <SideBlock avatar={avatar} t={t} />
      <div className="container-mainWrapper__content-wrapper">
        <div className="page-container__wrapper">
          <div className="page-container__ShareBar-wrapper">
            <ShareBar
              url={typeof window !== 'undefined' ? window.location.href : ''}
              len={0}
              t={t}
            />
          </div>
          <div className="page-container__title-block">
            <Typography variant="h2" classes="page-container__title">
              {title}
            </Typography>
            <div className="page-container__divider" />
          </div>
          <div className="page-container__content">{children}</div>
        </div>
      </div>
    </>
  );
};

PageLayout.propTypes = {
  title: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  lng: PropTypes.string.isRequired,
};

export default PageLayout;
