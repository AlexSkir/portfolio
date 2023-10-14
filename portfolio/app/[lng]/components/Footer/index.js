import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@mui/material/Tooltip';
import Link from 'next/link';
import Image from 'next/image';
import getDictionary from '../../../i18n/dictionaries';
import LoadingBlock from '../common/LoadingBlock';
import Render from '../../assets/icons/render.png';

const ReactIcon = lazy(() => import('../../assets/svg/react.svg'));
const MuiIcon = lazy(() => import('../../assets/svg/mui.svg'));
const FigmaIcon = lazy(() => import('../../assets/svg/figma.svg'));
const GhIcon = lazy(() => import('../../assets/svg/gh-pages.svg'));
const StackIcon = lazy(() => import('../../assets/svg/stack.svg'));
const SassIcon = lazy(() => import('../../assets/svg/sass.svg'));
const FontsIcon = lazy(() => import('../../assets/svg/fonts.svg'));
const I18nIcon = lazy(() => import('../../assets/svg/i18n.svg'));
const EmailJs = lazy(() => import('../../assets/svg/emailJs.svg'));
const Recaptcha = lazy(() => import('../../assets/svg/recaptcha.svg'));
const Npm = lazy(() => import('../../assets/svg/npm.svg'));
const NextIcon = lazy(() => import('../../assets/svg/Nextjs.svg'));

const ShareBar = lazy(() => import('../common/Share'));
const Typography = lazy(() => import('../Typography'));

const techIcons = [
  { href: 'https://nextjs.org/', icon: <NextIcon />, tooltip: 'Next.js' },
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
    icon: <Image src={Render} alt="Render.com" />,
    tooltip: 'Render (Cloud Application Hosting)',
  },
];

export default async function Footer(props) {
  const { lng } = props;
  const t = await getDictionary(lng);

  return (
    <div className="container-mainWrapper__footer footer-section">
      <div className="footer__left-block">
        <Suspense fallback={<LoadingBlock width="96px" height="42px" />}>
          <Link href="/" className="footer-section__logo-link">
            <Typography variant="h1" classes="footer-section__logo">
              Alex
            </Typography>
            <Typography variant="h1" classes="footer-section__logo gradientText">
              Skir
            </Typography>
          </Link>
        </Suspense>

        <Suspense fallback={<LoadingBlock width="100%" height="84px" />}>
          <Typography classes="footer__ref-link" align="left" variant="h6">
            <a
              className="footer-section__light-link"
              href="https://www.figma.com/community/file/1264680769254941322/Portfolio-Design"
              rel="noreferrer"
              target="_blank"
            >
              {t.footer.link1}
            </a>
            {t.footer.link2}
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
        <Suspense fallback={<LoadingBlock width="100%" height="56px" />}>
          <Typography variant="h6" align="right">
            {t.common.shareTitle}
          </Typography>
        </Suspense>

        <Suspense fallback={<LoadingBlock width="350px" height="70px" />}>
          <ShareBar url="origin" len={4} t={t} />
        </Suspense>
      </div>

      <div className="footer-section__techs-block">
        <Suspense fallback={<LoadingBlock width="100%" height="28px" />}>
          <Typography className="footer__tool-title" variant="h6" align="center">
            {t.footer.ref}
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

Footer.propTypes = {
  lng: PropTypes.string.isRequired,
};
