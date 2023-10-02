'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Typography from './components/Typography';
import useTranslation from '../i18n/client';
// import PageLayout from '../PageLayout';

/* <PageLayout title="404" avatar="404"> */

export default function NotFound() {
  const { lng } = useParams();
  const { t } = useTranslation(lng);
  return (
    <div className="not-found__container">
      <Typography variant="h4" align="center" classes="not-found__title">
        {t('common.nomatch.title')}
      </Typography>
      <button className="not-found__button MyTypography MyTypography-button" type="button">
        <Link href={`/${lng}`} className="not-found__link">
          <Typography variant="h2">{t('common.nomatch.btn')}</Typography>
        </Link>
      </button>
    </div>
  );
}
