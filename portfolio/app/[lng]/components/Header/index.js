'use client';

import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Typography from '../Typography';
import { useTranslation } from '../../../i18n/client';

import LangSwitcher from './langSwitcher';
import ThemeSwitcher from './themeSwitcher';

export default function Header({ lng }) {
  const { t } = useTranslation(lng);
  const pathname = usePathname();

  return (
    <div className="container-mainWrapper__header-section">
      <Link href={`/${lng}`} className="header-section__logo-link">
        <Typography variant="h1" classes="header-section__logo">
          {t('header.name')}
        </Typography>
        <Typography variant="h1" classes="gradientText header-section__logo">
          {t('header.name2')}
        </Typography>
      </Link>

      <ThemeSwitcher t={t} />

      <LangSwitcher pathname={pathname} lng={lng} t={t} />
    </div>
  );
}

Header.propTypes = {
  lng: PropTypes.string.isRequired,
};
