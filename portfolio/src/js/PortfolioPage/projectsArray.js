import fescoImg from '../../assets/images/projects/fesco.webp';
import AlexisImg from '../../assets/images/projects/alexis.webp';
import HexalImg from '../../assets/images/projects/hexal.webp';
import YoutubeImg from '../../assets/images/projects/youtube.webp';
import PiskelImg from '../../assets/images/projects/piskel.webp';
import CultureImg from '../../assets/images/projects/culturePortal.webp';
import ChatImg from '../../assets/images/projects/chat.webp';
import ZooGallery from '../../assets/images/projects/zoo/ZooExports';

const projectArr = {
  zoo: {
    name: 'Online Zoo',
    description: `Online Zoo is a website that shows information about animals from different zoos 
      with web cameras. The website has interactive elements, form, custom scroll, etc. 
      The breakpoints are 1600px, 1000px and 640px.`,
    tabs: ['all', 'landings'],
    mainTool: ['SASS', 'Adaptive layout'],
    technologies: ['HTML', 'SASS', 'jQuery', 'Adaptive layout', 'Perfect Pixel'],
    type: 'Landing page',
    path: 'Zoo',
    image: ZooGallery[0],
    code: 'https://github.com/AlexSkir/online-zoo',
    demo: 'https://alexskir.github.io/online-zoo/index.html',
    gallery: ZooGallery,
  },
  culturePortal: {
    name: 'Culture Portal',
    description: `Culture Portal is a multilingual web portal about the culture of Belarus, 
      developed as a team project.`,
    tabs: ['all', 'app', 'react', 'rss'],
    mainTool: ['React/redux', 'Material-UI'],
    technologies: ['React', 'Redux', 'Material-UI', 'Google API', 'I18N Internationalization'],
    type: 'Web app',
    path: 'Culture-Portal',
    image: CultureImg,
    code: 'https://github.com/AlexSkir/CodeJam-Culture-Portal',
    demo: 'https://rss-group10-photographers.netlify.com/',
    gallery: [],
  },
  chat: {
    name: 'Awesome Chat',
    tabs: ['all', 'app', 'react', 'rss'],
    mainTool: ['React/redux', 'Material-UI', 'Bootstrap'],
    technologies: ['React', 'Redux', 'WebSocket', 'Material-UI', 'Bootstrap', 'Responsive layout'],
    type: 'Web app',
    path: 'Awesome-Chat',
    image: ChatImg,
  },
  youtube: {
    name: 'Youtube App',
    tabs: ['all', 'js', 'app', 'rss'],
    mainTool: ['JS', 'Youtube api'],
    technologies: ['HTML', 'CSS', 'JS', 'AJAX', 'Youtube api'],
    type: 'Web app',
    path: 'Youtube',
    image: YoutubeImg,
  },
  fesco: {
    name: 'Fesco',
    tabs: ['all', 'landings'],
    mainTool: ['SASS', 'Responsive layout'],
    technologies: ['HTML', 'SASS', 'JS', 'Responsive layout', 'Perfect Pixel'],
    type: 'Landing page',
    path: 'Fesco',
    image: fescoImg,
  },
  piskel: {
    name: 'Piskel Clone',
    tabs: ['all', 'app', 'react', 'rss'],
    mainTool: ['React/redux', 'API'],
    technologies: ['React', 'Redux', 'jQuery', 'Canvas', 'Google API', 'Firebase DB'],
    type: 'Web app',
    path: 'Piskel',
    image: PiskelImg,
  },
  alexis: {
    name: 'Alexis',
    tabs: ['all', 'landings'],
    mainTool: ['CSS', 'Responsive layout', 'Perfect Pixel'],
    technologies: ['HTML', 'CSS', 'JS', 'Responsive layout', 'Perfect Pixel'],
    type: 'Landing page',
    path: 'Alexis',
    image: AlexisImg,
  },
  hexal: {
    name: 'Hexal',
    tabs: ['all', 'landings', 'rss'],
    mainTool: ['CSS', 'Static layout', 'Perfect Pixel'],
    technologies: ['HTML', 'CSS', 'Static layout', 'Perfect Pixel'],
    type: 'Landing page',
    path: 'Hexal',
    image: HexalImg,
  },
};

export default projectArr;
