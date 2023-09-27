'use client';

import { useTranslation } from '../../i18n/client';
import Contact from './Contact';

export default function Page({ params, searchParams }) {
  const { lng } = params;
  const { t } = useTranslation(lng, 'contact');
  return <Contact lng={lng} t={t} />;
}
