import React, { lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import Typography from '../../common/Typography';
import LoadingBlock from '../../common/LoadingBlock';
import Logo from '../../../assets/Logo.png';

const LangSwitcher = lazy(() => import('./MyLangSwitcher'));
const ThemeSwitcher = lazy(() => import('./MyThemeSwitcher'));

export default function Header() {
  const { t } = useTranslation();

  return (
    <div className="container-mainWrapper__header-section">
      <Suspense fallback={<LoadingBlock width="263px" height="42px" variant="rectangular" />}>
        <a href="/" className="header-section__logo-link">
          <img src={Logo} alt="AlexSkir" loading="lazy" width="120px" />
        </a>
      </Suspense>

      <Suspense fallback={<LoadingBlock width="56px" height="56px" variant="circular" />}>
        <ThemeSwitcher t={t} />
      </Suspense>

      <Suspense fallback={<LoadingBlock width="56px" height="56px" variant="circular" />}>
        <LangSwitcher t={t} />
      </Suspense>
    </div>
  );
}
