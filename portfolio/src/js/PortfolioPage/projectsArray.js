import fescoImg from '../../assets/images/fesco.webp';
import zooImg from '../../assets/images/zoo.webp';
import AlexisImg from '../../assets/images/alexis.webp';
import HexalImg from '../../assets/images/hexal.webp';
import YoutubeImg from '../../assets/images/youtube.webp';
import PiskelImg from '../../assets/images/piskel.webp';
import CultureImg from '../../assets/images/culturePortal.webp';
import ChatImg from '../../assets/images/chat.webp';

const projectArr = {
  zoo: {
    name: 'Online Zoo',
    tabs: ['all', 'landings'],
    technologies: ['HTML', 'SASS', 'jQuery', 'Adaptive layout', 'Perfect Pixel'],
    description: 'Landing page',
    path: 'Zoo',
    image: zooImg,
    cols: 2,
    rows: 2,
  },
  culturePortal: {
    name: 'Culture Portal',
    tabs: ['all', 'app', 'react', 'rss'],
    technologies: [
      'React',
      'Redux',
      'Gatsby',
      'Material-UI',
      'Google API',
      'I18N Internationalization',
    ],
    description: 'Web app',
    path: 'Culture-Portal',
    image: CultureImg,
    cols: 2,
    rows: 2,
  },
  chat: {
    name: 'Awesome Chat',
    tabs: ['all', 'app', 'react', 'rss'],
    technologies: ['React', 'Redux', 'WebSocket', 'Material-UI', 'Bootstrap', 'Responsive layout'],
    description: 'Web app',
    path: 'Awesome-Chat',
    image: ChatImg,
    cols: 2,
    rows: 2,
  },
  youtube: {
    name: 'Youtube App',
    tabs: ['all', 'js', 'app', 'rss'],
    technologies: ['HTML', 'CSS', 'JS', 'AJAX', 'Youtube api'],
    description: 'Web app',
    path: 'Youtube',
    image: YoutubeImg,
    cols: 2,
    rows: 2,
  },
  fesco: {
    name: 'Fesco',
    tabs: ['all', 'landings'],
    technologies: ['HTML', 'SASS', 'JS', 'Responsive layout', 'Perfect Pixel'],
    description: 'Landing page',
    path: 'Fesco',
    image: fescoImg,
  },
  piskel: {
    name: 'Piskel Clone',
    tabs: ['all', 'app', 'react', 'rss'],
    technologies: ['React', 'Redux', 'jQuery', 'Canvas', 'Google API', 'Firebase DB'],
    description: 'Web app',
    path: 'Piskel',
    image: PiskelImg,
  },
  alexis: {
    name: 'Alexis',
    tabs: ['all', 'landings'],
    technologies: ['HTML', 'CSS', 'JS', 'Responsive layout', 'Perfect Pixel'],
    description: 'Landing page',
    path: 'Alexis',
    image: AlexisImg,
  },
  hexal: {
    name: 'Hexal',
    tabs: ['all', 'landings', 'rss'],
    technologies: ['HTML', 'CSS', 'Static layout', 'Perfect Pixel'],
    description: 'Landing page',
    path: 'Hexal',
    image: HexalImg,
  },
};

export default projectArr;
