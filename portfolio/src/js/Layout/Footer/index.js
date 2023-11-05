import React, { Suspense, lazy } from 'react';
import { useTranslation } from 'react-i18next';
import Tooltip from '@mui/material/Tooltip';
import LoadingBlock from '../../common/LoadingBlock';
import Render from '../../../assets/icons/Render.png';

const ReactIcon = lazy(() => import('../../../assets/svg/React.svg'));
const MuiIcon = lazy(() => import('../../../assets/svg/Mui.svg'));
const FigmaIcon = lazy(() => import('../../../assets/svg/Figma.svg'));
const GhIcon = lazy(() => import('../../../assets/svg/Gh-pages.svg'));
const StackIcon = lazy(() => import('../../../assets/svg/Stack.svg'));
const SassIcon = lazy(() => import('../../../assets/svg/Sass.svg'));
const FontsIcon = lazy(() => import('../../../assets/svg/Fonts.svg'));
const I18nIcon = lazy(() => import('../../../assets/svg/i18n.svg'));
const EmailJs = lazy(() => import('../../../assets/svg/EmailJs.svg'));
const Recaptcha = lazy(() => import('../../../assets/svg/Recaptcha.svg'));
const Npm = lazy(() => import('../../../assets/svg/Npm.svg'));

const ShareBar = lazy(() => import('../../common/Share'));
const Typography = lazy(() => import('../../common/Typography'));
const MobileLink = lazy(() => import('./MobileLink'));

const techIcons = [
  { href: 'https://react.dev/', icon: <ReactIcon />, tooltip: 'React.js' },
  { href: 'https://mui.com/', icon: <MuiIcon />, tooltip: 'Material-UI Design System' },
  { href: 'https://www.figma.com/', icon: <FigmaIcon />, tooltip: 'Figma' },
  { href: 'https://github.com/', icon: <GhIcon />, tooltip: 'Github' },
  { href: 'https://stackoverflow.com/', icon: <StackIcon />, tooltip: 'Stack overflow' },
  { href: 'https://sass-lang.com/', icon: <SassIcon />, tooltip: 'Sass' },
  { href: 'https://fonts.google.com/', icon: <FontsIcon />, tooltip: 'Google Fonts' },
  { href: 'https://www.i18next.com/', icon: <I18nIcon />, tooltip: 'i18n localization' },
  { href: 'https://dashboard.emailjs.com/', icon: <EmailJs />, tooltip: 'Email JS Service' },
  {
    href: 'https://www.google.com/recaptcha/about/',
    icon: <Recaptcha />,
    tooltip: "Google's reCAPTCHA",
  },
  { href: 'https://www.npmjs.com/', icon: <Npm />, tooltip: 'Node Package Manager' },
  {
    href: 'https://render.com/',
    icon: <img src={Render} alt="Render.com" />,
    tooltip: 'Render (Cloud Application Hosting)',
  },
];

export default function Footer() {
  const { t } = useTranslation();

  return (
    <div className="container-mainWrapper__footer footer-section">
      <div className="footer__left-block">
        <Suspense fallback={<LoadingBlock width="96px" height="42px" />}>
          <a href="/" className="footer-section__logo-link">
            <Typography variant="h1" classes="footer-section__logo">
              Alex
            </Typography>
            <Typography variant="h1" classes="footer-section__logo gradientText">
              Skir
            </Typography>
          </a>
        </Suspense>

        <Suspense fallback={<LoadingBlock width="100%" height="84px" />}>
          <Typography classes="footer__ref-link" align="left" variant="h6">
            <a
              className="footer-section__light-link"
              href="https://www.figma.com/community/file/1264680769254941322/Portfolio-Design"
              rel="noreferrer"
              target="_blank"
            >
              {t('footer.link1')}
            </a>
            {t('footer.link2')}
            <a
              className="footer-section__dark-link"
              href="https://www.figma.com/@beatricewambui"
              rel="noreferrer"
              target="_blank"
            >
              Beatrice Wambui Mbugua
            </a>
          </Typography>
        </Suspense>
      </div>

      <div className="footer__right-block">
        <MobileLink>
          <Typography variant="h6" align="right" classes="footer__mobile-link">
            {t('footer.desktop')}
          </Typography>
        </MobileLink>
        <Suspense fallback={<LoadingBlock width="100%" height="56px" />}>
          <Typography variant="h6" align="right">
            {t('common.shareTitle')}
          </Typography>
        </Suspense>

        <Suspense fallback={<LoadingBlock width="350px" height="70px" />}>
          <ShareBar url="origin" len={4} t={t} />
        </Suspense>
      </div>

      <div className="footer-section__techs-block">
        <Suspense fallback={<LoadingBlock width="100%" height="28px" />}>
          <Typography className="footer__tool-title" variant="h6" align="center">
            {t('footer.ref')}
          </Typography>
        </Suspense>
        <div className="footer-section__techs-wrapper">
          {techIcons.map((item, i) => (
            <Suspense key={i} fallback={<LoadingBlock width="40px" height="40px" />}>
              <Tooltip title={item.tooltip}>
                <a
                  className="footer-section__tech-link"
                  href={item.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  {item.icon}
                </a>
              </Tooltip>
            </Suspense>
          ))}
        </div>
      </div>
    </div>
  );
}
