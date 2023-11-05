import React from 'react';
import { useTranslation } from 'react-i18next';
import Typography from './Typography';
import PageWrapper from '../Layout/PageWrapper';

export default function NoMatch() {
  const { t } = useTranslation();
  return (
    <>
      <PageWrapper title="404">
        <div className="not-found__container">
          <Typography variant="h3" align="center" classes="not-found__title">
            {t('common.nomatch.title')}
          </Typography>
          <button className="not-found__button MyTypography MyTypography-button" type="button">
            <a href="/" className="not-found__link">
              <Typography variant="h4">{t('common.nomatch.btn')}</Typography>
            </a>
          </button>
        </div>
      </PageWrapper>
    </>
  );
}
