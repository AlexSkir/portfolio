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

export default function galleryArray(t) {
  const { landing, adaptive, responsive, fixed, app, phptempl, shop, forum } = t;
  return [
    {
      name: 'Yandex Go',
      tabs: ['all', 'landings', 'cms'],
      mainTool: [t.constr, 'CMS'],
      type: landing,
      path: 'yandex-go-cms',
      image: yagoCMSImage,
    },
    {
      name: 'Yandex Go SASS',
      tabs: ['all', 'landings'],
      mainTool: ['SASS', adaptive],
      type: landing,
      path: 'yandex-go-sass',
      image: yagoImage,
    },
    {
      name: 'Online Zoo',
      tabs: ['all', 'landings'],
      mainTool: ['SASS', adaptive],
      type: landing,
      path: 'zoo',
      image: zooImage,
    },
    {
      name: 'Culture Portal',
      tabs: ['all', 'app', 'react', 'school'],
      mainTool: ['React/redux', 'Material-UI'],
      type: app,
      path: 'culture-portal',
      image: CultureImg,
    },
    {
      name: 'Awesome Chat',
      tabs: ['all', 'app', 'react', 'school'],
      mainTool: ['React/redux', 'Material-UI', 'Bootstrap'],
      type: app,
      path: 'awesome-chat',
      image: ChatImg,
    },
    {
      name: 'Youtube App',
      tabs: ['all', 'js', 'app', 'school'],
      mainTool: ['JS', 'Youtube api'],
      type: app,
      path: 'youtube',
      image: YoutubeImg,
    },
    {
      name: 'Fesco',
      tabs: ['all', 'landings'],
      mainTool: ['SASS', responsive],
      type: landing,
      path: 'fesco',
      image: fescoImg,
    },
    {
      name: 'Piskel Clone',
      tabs: ['all', 'app', 'react', 'school'],
      mainTool: ['React/redux', 'API'],
      type: app,
      path: 'piskel',
      image: PiskelImg,
    },
    {
      name: 'Alexis',
      tabs: ['all', 'landings'],
      mainTool: ['CSS', responsive],
      type: landing,
      path: 'alexis',
      image: AlexisImg,
    },
    {
      name: 'Hexal',
      tabs: ['all', 'landings', 'school'],
      mainTool: ['CSS', fixed],
      type: landing,
      path: 'hexal',
      image: HexalImg,
    },
    {
      name: 'GoFuckBiz Forum',
      tabs: ['all'],
      mainTool: ['CSS', phptempl],
      type: forum,
      path: 'gofuck',
      image: GofuckImg,
    },
    {
      name: 'Gritella lingerie',
      warning: t.gritella.warning.join(' '),
      tabs: ['all', 'cms'],
      mainTool: ['WordPress', 'WooCommerce'],
      type: shop,
      path: 'gritella',
      image: GritellaImg,
    },
  ];
}
