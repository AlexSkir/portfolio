import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';
import getDictionary from '../../../i18n/dictionaries';
import LoadingBlock from '../common/LoadingBlock';
import Render from '../../assets/icons/render.png';
import Logo from '../../assets/logo.png';

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
const MobileLink = lazy(() => import('./MobileLink'));

const techIcons = [
  { href: 'https://nextjs.org/', icon: <NextIcon /> },
  { href: 'https://react.dev/', icon: <ReactIcon /> },
  { href: 'https://mui.com/', icon: <MuiIcon /> },
  { href: 'https://www.figma.com/', icon: <FigmaIcon /> },
  { href: 'https://github.com/', icon: <GhIcon /> },
  { href: 'https://stackoverflow.com/', icon: <StackIcon /> },
  { href: 'https://sass-lang.com/', icon: <SassIcon /> },
  { href: 'https://fonts.google.com/', icon: <FontsIcon /> },
  { href: 'https://www.i18next.com/', icon: <I18nIcon /> },
  { href: 'https://dashboard.emailjs.com/', icon: <EmailJs /> },
  { href: 'https://www.google.com/recaptcha/about/', icon: <Recaptcha /> },
  { href: 'https://www.npmjs.com/', icon: <Npm /> },
  { href: 'https://render.com/', icon: <Image src={Render} alt="Render.com" /> },
];

export default async function Footer(props) {
  const { lng } = props;
  const t = await getDictionary(lng);

  return (
    <div className="container-mainWrapper__footer footer-section">
      <Suspense fallback={<LoadingBlock width="100%" height="84px" />}>
        <Typography classes="footer__ref-link" align="right" variant="h6">
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

      <MobileLink>
        <Typography variant="h6" align="right" classes="footer__mobile-link">
          {t.footer.desktop}
        </Typography>
      </MobileLink>
      <Suspense fallback={<LoadingBlock width="100%" height="70px" />}>
        <div>
          <Typography variant="h6" align="right">
            {t.common.shareTitle}
          </Typography>
          <ShareBar url="origin" len={4} t={t} />
        </div>
      </Suspense>

      <div className="footer-section__techs-wrapper">
        <Suspense fallback={<LoadingBlock width="100%" height="28px" />}>
          <Typography classes="footer__tool-title" variant="h6" align="center">
            {t.footer.ref}
          </Typography>
        </Suspense>
        {techIcons.map((item, i) => (
          <Suspense key={i} fallback={<LoadingBlock width="40px" height="40px" />}>
            <a
              className="footer-section__tech-link"
              href={item.href}
              rel="noreferrer"
              target="_blank"
            >
              {item.icon}
            </a>
          </Suspense>
        ))}
      </div>
    </div>
  );
}

Footer.propTypes = {
  lng: PropTypes.string.isRequired,
};
