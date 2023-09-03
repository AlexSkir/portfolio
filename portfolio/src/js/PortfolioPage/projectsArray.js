/* eslint-disable max-len */
import React from 'react';
import fescoImg from '../../assets/images/projects/fesco.webp';
import AlexisImg from '../../assets/images/projects/alexis.webp';
import HexalImg from '../../assets/images/projects/hexal.webp';
import YoutubeImg from '../../assets/images/projects/youtube.webp';
import PiskelImg from '../../assets/images/projects/piskel.webp';
import CultureImg from '../../assets/images/projects/culturePortal.webp';
import ChatImg1 from '../../assets/images/projects/chat1.webp';
import GofuckImg from '../../assets/images/projects/gofuck.webp';
import GritellaImg from '../../assets/images/projects/gritella.webp';
import zooImage from '../../assets/images/projects/zoo.webp';
import yagoImage from '../../assets/images/projects/yago.webp';
import yagoCMSImage from '../../assets/images/projects/yagoCms.webp';
import reactIcon from '../../assets/images/react.png';
import sassIcon from '../../assets/images/sass.png';
import jsIcon from '../../assets/images/js.png';
import cssIcon from '../../assets/images/css.png';
import wpIcon from '../../assets/images/wordpress.png';

import GritellaProject from './ProjectPage/Gritella';
import CulturePortal from './ProjectPage/CulturePortal';
import YoutubeApp from './ProjectPage/Youtube';
import Piskel from './ProjectPage/Piskel';

export default function projectArr(t) {
  const land = t('projects.landing', { ns: 'projects' });
  const adapt = t('projects.adaptive', { ns: 'projects' });
  const resp = t('projects.responsive', { ns: 'projects' });
  const statLay = t('projects.static', { ns: 'projects' });
  const mobile = t('projects.mobile', { ns: 'projects' });
  const app = t('projects.app', { ns: 'projects' });
  const task = t('projects.task', { ns: 'projects' });
  const phptempl = t('projects.phptempl', { ns: 'projects' });
  const shop = t('projects.shop', { ns: 'projects' });
  const forum = t('projects.forum', { ns: 'projects' });
  return {
    yandexGo: {
      name: 'Yandex Go',
      description: t('projects.yandexGo.description', { joinArrays: ' ', ns: 'projects' }),
      tabs: ['all', 'landings', 'cms'],
      mainTool: [land, 'CMS'],
      avatar: sassIcon,
      technologies: [
        'CMS',
        'JS',
        adapt,
        'Perfect Pixel',
        t('projects.constr', { ns: 'projects' }),
        'API',
      ],
      type: land,
      path: 'Yandex-Go-CMS',
      image: yagoCMSImage,
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
    yandexGoSASS: {
      name: 'Yandex Go SASS',
      description: t('projects.yandexGoSASS.description', { joinArrays: ' ', ns: 'projects' }),
      tabs: ['all', 'landings'],
      mainTool: ['SASS', adapt],
      avatar: sassIcon,
      technologies: ['HTML', 'SASS', 'jQuery', adapt, 'Perfect Pixel'],
      type: land,
      path: 'Yandex-Go-SASS',
      image: yagoImage,
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
      description: t('projects.zoo.description', { joinArrays: ' ', ns: 'projects' }),
      tabs: ['all', 'landings'],
      mainTool: ['SASS', adapt],
      avatar: sassIcon,
      technologies: ['HTML', 'SASS', 'jQuery', adapt, 'Perfect Pixel'],
      type: land,
      path: 'Zoo',
      image: zooImage,
      links: [
        { name: 'demo', url: 'https://alexskir.github.io/online-zoo/index.html' },
        { name: 'github', url: 'https://github.com/AlexSkir/online-zoo' },
        { name: 'figma', url: 'https://www.figma.com/file/jfEFwkXVj1WRq7sUHDr8os/PetStory-online' },
      ],
    },
    culturePortal: {
      name: 'Culture Portal',
      description: t('projects.culturePortal.description', { joinArrays: ' ', ns: 'projects' }),
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
      path: 'Culture-Portal',
      image: CultureImg,
      links: [
        { name: 'demo', url: 'https://rss-group10-photographers.netlify.com/' },
        { name: 'github (gatsby)', url: 'https://github.com/AlexSkir/RSS-group10-gatsbyNetlify' },
        { name: 'github (react)', url: 'https://github.com/AlexSkir/CodeJam-Culture-Portal' },
      ],
      more: <CulturePortal />,
    },
    chat: {
      name: 'Awesome Chat',
      description: t('projects.chat.description', { joinArrays: ' ', ns: 'projects' }),
      tabs: ['all', 'app', 'react', 'school'],
      mainTool: ['React/redux', 'Material-UI', 'Bootstrap'],
      avatar: reactIcon,
      technologies: ['React', 'Redux', 'WebSocket', 'Material-UI', 'Bootstrap', resp],
      type: app,
      path: 'Awesome-Chat',
      image: ChatImg1,
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
      description: t('projects.youtube.description', { joinArrays: ' ', ns: 'projects' }),
      tabs: ['all', 'js', 'app', 'school'],
      mainTool: ['JS', 'Youtube api'],
      avatar: jsIcon,
      technologies: ['Pure JS', 'AJAX', 'Youtube API', 'HTML', 'CSS', resp],
      type: app,
      path: 'Youtube',
      image: YoutubeImg,
      links: [
        { name: 'demo', url: 'https://alexskir.github.io/youtube-app/' },
        { name: 'github', url: 'https://github.com/AlexSkir/youtube-app/tree/gh-pages' },
        {
          name: task,
          url: 'https://github.com/rolling-scopes-school/tasks/blob/2018-Q3/tasks/youtube.md',
        },
      ],
      more: <YoutubeApp />,
    },
    fesco: {
      name: 'Fesco',
      description: t('projects.fesco.description', { joinArrays: ' ', ns: 'projects' }),
      tabs: ['all', 'landings'],
      mainTool: ['SASS', resp],
      avatar: sassIcon,
      technologies: ['HTML', 'SASS', 'JS', resp, 'Perfect Pixel'],
      type: land,
      path: 'Fesco',
      image: fescoImg,
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
      description: t('projects.piskel.description', { joinArrays: ' ', ns: 'projects' }),
      tabs: ['all', 'app', 'react', 'school'],
      mainTool: ['React/redux', 'API'],
      avatar: reactIcon,
      technologies: ['React', 'Redux', 'jQuery', 'Canvas', 'Google API', 'Firebase DB'],
      type: app,
      path: 'Piskel',
      image: PiskelImg,
      links: [
        { name: 'demo', url: 'http://alexskir.github.io/clown/' },
        { name: 'github', url: 'https://github.com/AlexSkir/clown/' },
      ],
      more: <Piskel />,
    },
    alexis: {
      name: 'Alexis',
      description: t('projects.alexis.description', { joinArrays: ' ', ns: 'projects' }),
      tabs: ['all', 'landings'],
      mainTool: ['CSS', resp],
      avatar: cssIcon,
      technologies: ['HTML', 'CSS', 'JS', resp, 'Perfect Pixel'],
      type: land,
      path: 'Alexis',
      image: AlexisImg,
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
      description: t('projects.hexal.description', { joinArrays: ' ', ns: 'projects' }),
      tabs: ['all', 'landings', 'school'],
      mainTool: ['CSS', statLay],
      avatar: cssIcon,
      technologies: ['HTML', 'CSS', statLay, 'Perfect Pixel'],
      type: land,
      path: 'Hexal',
      image: HexalImg,
      links: [
        { name: 'demo', url: 'https://alexskir.github.io/hexal/' },
        { name: 'github', url: 'https://github.com/AlexSkir/hexal/tree/gh-pages' },
      ],
    },
    gofuck: {
      name: 'GoFuckBiz Forum',
      description: t('projects.gofuck.description', { joinArrays: ' ', ns: 'projects' }),
      tabs: ['all'],
      mainTool: ['CSS', phptempl],
      avatar: cssIcon,
      technologies: ['CSS', mobile, phptempl],
      type: forum,
      path: 'Gofuck',
      image: GofuckImg,
      links: [
        { name: 'website', url: 'https://www.gofuckbiz.com/' },
        { name: 'github', url: 'https://github.com/AlexSkir/gofuck/blob/master/wireless_css.txt' },
      ],
    },
    gritella: {
      name: 'Gritella lingerie',
      description: t('projects.gritella.description', { joinArrays: ' ', ns: 'projects' }),
      warning: t('projects.gritella.warning', { joinArrays: ' ', ns: 'projects' }),
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
      path: 'Gritella',
      image: GritellaImg,
      links: [
        { name: 'demo', url: 'http://d97714j6.beget.tech/' },
        { name: 'github', url: 'https://github.com/AlexSkir/gritella-lingerie' },
      ],
      more: <GritellaProject />,
    },
  };
}
