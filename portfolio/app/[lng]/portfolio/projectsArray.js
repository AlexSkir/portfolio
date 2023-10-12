/* eslint-disable max-len */
import React, { lazy, Suspense } from 'react';
import fescoImg from '../assets/projects/fesco.webp';
import AlexisImg from '../assets/projects/alexis.webp';
import HexalImg from '../assets/projects/hexal.webp';
import YoutubeImg from '../assets/projects/youtube.webp';
import PiskelImg from '../assets/projects/piskel.webp';
import CultureImg from '../assets/projects/culturePortal.webp';
import ChatImg from '../assets/projects/chat.webp';
import GofuckImg from '../assets/projects/gofuck.webp';
import GritellaImg from '../assets/projects/gritella.webp';
import zooImage from '../assets/projects/zoo.webp';
import yagoImage from '../assets/projects/yago.webp';
import yagoCMSImage from '../assets/projects/yagoCms.webp';

import fescoShare from '../assets/projects/share/fesco.png';
import AlexisShare from '../assets/projects/share/alexis.png';
import HexalShare from '../assets/projects/share/hexal.png';
import YoutubeShare from '../assets/projects/share/youtube.png';
import PiskelShare from '../assets/projects/share/piskel.jpg';
import CultureShare from '../assets/projects/share/culturePortal.png';
import ChatShare from '../assets/projects/share/chat.png';
import GofuckShare from '../assets/projects/share/gofuck.png';
import GritellaShare from '../assets/projects/share/gritella.png';
import zooShare from '../assets/projects/share/zoo.png';
import yagoShare from '../assets/projects/share/yago.png';
import yagoCMSShare from '../assets/projects/share/yagoCms.png';

import reactIcon from '../assets/icons/react.png';
import sassIcon from '../assets/icons/sass.png';
import jsIcon from '../assets/icons/js.png';
import cssIcon from '../assets/icons/css.png';
import wpIcon from '../assets/icons/wordpress.png';
import wixIcon from '../assets/icons/wix.png';

const GritellaProject = lazy(() => import('./[project]/Gritella'));
const YoutubeApp = lazy(() => import('./[project]/Youtube'));

/* const GritellaProject = lazy(() => import('./Gritella'));
const CulturePortal = lazy(() => import('./CulturePortal'));
const YoutubeApp = lazy(() => import('./Youtube')); */
/* const Piskel = lazy(() => import('./Piskel')); */

export default function projectArr(t) {
  const { landing, adaptive, responsive, fixed, mobile, app, task, phptempl, shop, forum } = t;

  const youtubeLinks = [
    { name: 'demo', url: 'https://alexskir.github.io/youtube-app/' },
    { name: 'github', url: 'https://github.com/AlexSkir/youtube-app/tree/gh-pages' },
    {
      name: task,
      url: 'https://github.com/rolling-scopes-school/tasks/blob/2018-Q3/tasks/youtube.md',
    },
  ];
  const gritellaLinks = [
    { name: 'demo', url: 'http://d97714j6.beget.tech/' },
    { name: 'github', url: 'https://github.com/AlexSkir/gritella-lingerie' },
  ];

  return {
    'yandex-go-cms': {
      name: 'Yandex Go',
      description: t.yandexGo.description.join(' '),
      tabs: ['all', 'landings', 'cms'],
      mainTool: [t.constr, 'CMS'],
      avatar: wixIcon,
      technologies: ['CMS', 'JS', adaptive, 'Perfect Pixel', t.constr, 'API'],
      type: landing,
      path: 'yandex-go-cms',
      image: yagoCMSImage,
      share: yagoShare,
      links: [
        {
          name: 'demo',
          url: 'https://askirnevskaia.editorx.io/yago',
        },
        {
          name: 'figma',
          url:
            'https://www.figma.com/file/W9gacDyHMIG55KuDwAN2Tl/go-scooter-pass?node-id=0%3A1&mode=dev',
        },
      ],
    },
    'yandex-go-sass': {
      name: 'Yandex Go SASS',
      description: t.yandexGoSASS.description.join(' '),
      tabs: ['all', 'landings'],
      mainTool: ['SASS', adaptive],
      avatar: sassIcon,
      technologies: ['HTML', 'SASS', 'jQuery', adaptive, 'Perfect Pixel'],
      type: landing,
      path: 'yandex-go-sass',
      image: yagoImage,
      share: yagoCMSShare,
      links: [
        { name: 'demo', url: 'https://alexskir.github.io/yago/' },
        { name: 'github', url: 'https://github.com/AlexSkir/yago' },
        {
          name: 'figma',
          url:
            'https://www.figma.com/file/W9gacDyHMIG55KuDwAN2Tl/go-scooter-pass?node-id=0%3A1&mode=dev',
        },
      ],
    },
    zoo: {
      name: 'Online Zoo',
      description: t.zoo.description.join(' '),
      tabs: ['all', 'landings'],
      mainTool: ['SASS', adaptive],
      avatar: sassIcon,
      technologies: ['HTML', 'SASS', 'jQuery', adaptive, 'Perfect Pixel'],
      type: landing,
      path: 'zoo',
      image: zooImage,
      share: zooShare,
      links: [
        { name: 'demo', url: 'https://alexskir.github.io/online-zoo/index.html' },
        { name: 'github', url: 'https://github.com/AlexSkir/online-zoo' },
        { name: 'figma', url: 'https://www.figma.com/file/jfEFwkXVj1WRq7sUHDr8os/PetStory-online' },
      ],
    },
    'culture-portal': {
      name: 'Culture Portal',
      description: t.culturePortal.description.join(' '),
      tabs: ['all', 'app', 'react', 'school'],
      mainTool: ['React/redux', 'Material-UI'],
      avatar: reactIcon,
      technologies: [
        'React',
        'Redux',
        'Gatsby',
        'Material-UI',
        'Google API',
        'Internationalization',
      ],
      type: app,
      path: 'culture-portal',
      image: CultureImg,
      share: CultureShare,
      links: [
        { name: 'demo', url: 'https://rss-group10-photographers.netlify.com/' },
        { name: 'github (gatsby)', url: 'https://github.com/AlexSkir/RSS-group10-gatsbyNetlify' },
        { name: 'github (react)', url: 'https://github.com/AlexSkir/CodeJam-Culture-Portal' },
      ],
      more: {
        /* <Suspense fallback={<LoadingMore />}>
          <CulturePortal />
        </Suspense> */
      },
      more1: t.more1,
    },
    'awesome-chat': {
      name: 'Awesome Chat',
      description: t.chat.description.join(' '),
      tabs: ['all', 'app', 'react', 'school'],
      mainTool: ['React/redux', 'Material-UI', 'Bootstrap'],
      avatar: reactIcon,
      technologies: ['React', 'Redux', 'WebSocket', 'Material-UI', 'Bootstrap', responsive],
      type: app,
      path: 'awesome-chat',
      image: ChatImg,
      share: ChatShare,
      links: [
        { name: 'demo', url: 'https://chat-render-9rxz.onrender.com/' },
        { name: 'github', url: 'https://github.com/AlexSkir/chat/tree/project' },
        {
          name: task,
          url: 'https://github.com/rolling-scopes-school/tasks/blob/master/tasks/chat.md',
        },
      ],
    },
    youtube: {
      name: 'Youtube App',
      description: t.youtube.description.join(' '),
      tabs: ['all', 'js', 'app', 'school'],
      mainTool: ['JS', 'Youtube api'],
      avatar: jsIcon,
      technologies: ['Pure JS', 'AJAX', 'Youtube API', 'HTML', 'CSS', responsive],
      type: app,
      path: 'youtube',
      image: YoutubeImg,
      share: YoutubeShare,
      links: youtubeLinks,
      more: <YoutubeApp more={t.youtube.more.features} title={t.features} links={youtubeLinks} />,
      more1: t.more1,
    },
    fesco: {
      name: 'Fesco',
      description: t.fesco.description.join(' '),
      tabs: ['all', 'landings'],
      mainTool: ['SASS', responsive],
      avatar: sassIcon,
      technologies: ['HTML', 'SASS', 'JS', responsive, 'Perfect Pixel'],
      type: landing,
      path: 'fesco',
      image: fescoImg,
      share: fescoShare,
      links: [
        { name: 'demo', url: 'https://alexskir.github.io/restaurant-fesco/' },
        { name: 'github', url: 'https://github.com/AlexSkir/restaurant-fesco' },
        {
          name: 'psd template',
          url: 'https://www.graphberry.com/item/fesco-restaurant-psd-template',
        },
      ],
    },
    piskel: {
      name: 'Piskel Clone',
      description: t.piskel.description.join(' '),
      tabs: ['all', 'app', 'react', 'school'],
      mainTool: ['React/redux', 'API'],
      avatar: reactIcon,
      technologies: ['React', 'Redux', 'jQuery', 'Canvas', 'Google API', 'Firebase DB'],
      type: app,
      path: 'piskel',
      image: PiskelImg,
      share: PiskelShare,
      links: [
        { name: 'demo', url: 'http://alexskir.github.io/clown/' },
        { name: 'github', url: 'https://github.com/AlexSkir/clown/' },
      ],
      more: {
        /* <Suspense fallback={<LoadingMore />}>
          <Piskel />
        </Suspense> */
      },
      more1: t.more1,
    },
    alexis: {
      name: 'Alexis',
      description: t.alexis.description.join(' '),
      tabs: ['all', 'landings'],
      mainTool: ['CSS', responsive],
      avatar: cssIcon,
      technologies: ['HTML', 'CSS', 'JS', responsive, 'Perfect Pixel'],
      type: landing,
      path: 'alexis',
      image: AlexisImg,
      share: AlexisShare,
      links: [
        { name: 'demo', url: 'https://alexskir.github.io/alexis-homepage/' },
        { name: 'github', url: 'https://github.com/AlexSkir/alexis-homepage' },
        {
          name: 'PSD template',
          url: 'http://psd-html-css.ru/templates/alexis-psd-shablon-odnostranichnogo-sayta',
        },
      ],
    },
    hexal: {
      name: 'Hexal',
      description: t.hexal.description.join(' '),
      tabs: ['all', 'landings', 'school'],
      mainTool: ['CSS', fixed],
      avatar: cssIcon,
      technologies: ['HTML', 'CSS', fixed, 'Perfect Pixel'],
      type: landing,
      path: 'hexal',
      image: HexalImg,
      share: HexalShare,
      links: [
        { name: 'demo', url: 'https://alexskir.github.io/hexal/' },
        { name: 'github', url: 'https://github.com/AlexSkir/hexal/tree/gh-pages' },
      ],
    },
    gofuck: {
      name: 'GoFuckBiz Forum',
      description: t.gofuck.description.join(' '),
      tabs: ['all'],
      mainTool: ['CSS', phptempl],
      avatar: cssIcon,
      technologies: ['CSS', mobile, phptempl],
      type: forum,
      path: 'gofuck',
      image: GofuckImg,
      share: GofuckShare,
      links: [
        { name: 'website', url: 'https://www.gofuckbiz.com/' },
        { name: 'github', url: 'https://github.com/AlexSkir/gofuck/blob/master/wireless_css.txt' },
      ],
    },
    gritella: {
      name: 'Gritella lingerie',
      description: t.gritella.description.join(' '),
      warning: t.gritella.warning.join(' '),
      tabs: ['all', 'cms'],
      mainTool: ['WordPress', 'WooCommerce'],
      avatar: wpIcon,
      technologies: [
        'WordPress',
        'WooCommerce',
        'CMS',
        'PHP',
        'MySQL',
        'JavaScript',
        'Google login',
        'ReCaptcha',
      ],
      type: shop,
      path: 'gritella',
      image: GritellaImg,
      share: GritellaShare,
      links: gritellaLinks,
      more: (
        <GritellaProject
          more={Object.values(t.gritella.more)}
          title={t.features}
          links={gritellaLinks}
        />
      ),
      more1: t.more1,
    },
  };
}
