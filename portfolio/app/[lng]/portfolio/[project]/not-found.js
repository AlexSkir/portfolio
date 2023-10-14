import React from 'react';
import Link from 'next/link';
import { cookies } from 'next/headers';
import Typography from '../../components/Typography';
import getDictionary from '../../../i18n/dictionaries';

export default async function NotFound() {
  let lng = 'ru';
  if (cookies().get('i18next')) {
    lng = cookies().get('i18next').value;
  }

  const t = await getDictionary(lng);

  return (
    <div className="not-found__container">
      <Typography variant="h3" align="center" classes="not-found__title">
        {t.common.nomatch.title}
      </Typography>
      <button className="not-found__button MyTypography MyTypography-button" type="button">
        <Link href="/" className="not-found__link">
          <Typography variant="h4">{t.common.nomatch.btn}</Typography>
        </Link>
      </button>
    </div>
  );
}
