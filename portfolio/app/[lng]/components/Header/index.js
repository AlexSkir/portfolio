'use client';

import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Typography from '../theme/Typography';
import { useTranslation } from '../../../i18n/client';

// import { MyThemeSwitch } from '../theme/ThemeSwitcher';
import LangSwitcher from './langSwitcher';
import MyThemeSwitch from '../themeSwitcher';

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

      <MyThemeSwitch t={t} />

      <LangSwitcher pathname={pathname} lng={lng} t={t} />
    </div>
  );
}

Header.propTypes = {
  lng: PropTypes.string.isRequired,
};
