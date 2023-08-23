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
import reactIcon from '../../assets/images/react.png';
import sassIcon from '../../assets/images/sass.png';
import jsIcon from '../../assets/images/js.svg';
import reduxIcon from '../../assets/images/redux.png';
import jqueryIcon from '../../assets/images/jquery.png';
import pixelIcon from '../../assets/images/pixel.png';
import htmlIcon from '../../assets/images/html.png';
import cssIcon from '../../assets/images/css.png';
import wpIcon from '../../assets/images/wordpress.png';

import GritellaProject from '../PortfolioPage/ProjectPage/Gritella';

const projectArr = {
  yandexGo: {
    name: 'Yandex Go',
    description: `Yandex Go is a one-page website (landing) promoting scooters. 
    The website has adaptive layout, main breakpoints are 1440px, 900px and 375px.
    For smaller screens images are arranged into a slider, controlled by simple 
    jQuery scripts called with on-click events. There is also a copy of this web page
    created using Editor X advanced creation platform for website development.`,
    tabs: ['all', 'landings'],
    mainTool: ['SASS', 'Adaptive layout'],
    avatar: sassIcon,
    technologies: ['HTML', 'SASS', 'jQuery', 'Adaptive layout', 'Perfect Pixel', 'Web constructor'],
    type: 'Landing page',
    path: 'Yandex-Go',
    image: yagoImage,
    links: [
      { name: 'demo', url: 'https://alexskir.github.io/yago/' },
      { name: 'github', url: 'https://github.com/AlexSkir/yago' },
      {
        name: 'demo (editor X)',
        url: 'https://askirnevskaia.editorx.io/yago',
      },
    ],
  },
  zoo: {
    name: 'Online Zoo',
    description: `Online Zoo is a website that shows information about animals from different zoos 
      with web cameras. The website has interactive elements, form, custom scroll, etc. 
      The breakpoints are 1600px, 1000px and 640px.`,
    tabs: ['all', 'landings'],
    mainTool: ['SASS', 'Adaptive layout'],
    avatar: sassIcon,
    technologies: ['HTML', 'SASS', 'jQuery', 'Adaptive layout', 'Perfect Pixel'],
    type: 'Landing page',
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
    description: `Culture Portal is a multilingual web portal about the culture of Belarus, 
      developed as a team project.`,
    tabs: ['all', 'app', 'react', 'rss'],
    mainTool: ['React/redux', 'Material-UI'],
    avatar: reactIcon,
    technologies: [
      'React',
      'Redux',
      'Gatsby',
      'Material-UI',
      'Google API',
      'I18N Internationalization',
    ],
    type: 'Web app',
    path: 'Culture-Portal',
    image: CultureImg,
    links: [
      { name: 'demo', url: 'https://rss-group10-photographers.netlify.com/' },
      { name: 'github (gatsby)', url: 'https://github.com/AlexSkir/RSS-group10-gatsbyNetlify' },
      { name: 'github (react)', url: 'https://github.com/AlexSkir/online-zoo' },
    ],
  },
  chat: {
    name: 'Awesome Chat',
    description: `Awesome Chat - Simple WebSocket based Chat-application with push-notifications, 
    content-editable text field and emoticons. Autodeployment from a Github repository to Render.`,
    tabs: ['all', 'app', 'react', 'rss'],
    mainTool: ['React/redux', 'Material-UI', 'Bootstrap'],
    avatar: reactIcon,
    technologies: ['React', 'Redux', 'WebSocket', 'Material-UI', 'Bootstrap', 'Responsive layout'],
    type: 'Web app',
    path: 'Awesome-Chat',
    image: ChatImg1,
    links: [
      { name: 'demo', url: 'https://chat-render-9rxz.onrender.com/' },
      { name: 'github', url: 'https://github.com/AlexSkir/chat/tree/project' },
      {
        name: 'Terms of reference',
        url: 'https://github.com/rolling-scopes-school/tasks/blob/master/tasks/chat.md',
      },
    ],
  },
  youtube: {
    name: 'Youtube App',
    description: `The app is based on pure JS, using JS DOM manipulation, AJAX enquiries, 
    youtube API, Babel, Webpack. It is a web app for searching the YouTube content by keywords. 
    The search result is presented in the form of cards with the detailed information about 
    the video clips.`,
    tabs: ['all', 'js', 'app', 'rss'],
    mainTool: ['JS', 'Youtube api'],
    avatar: jsIcon,
    technologies: ['Pure JS', 'AJAX', 'Youtube api', 'HTML', 'CSS', 'Responsive Layout'],
    type: 'Web app',
    path: 'Youtube',
    image: YoutubeImg,
    links: [
      { name: 'demo', url: 'https://alexskir.github.io/youtube-app/' },
      { name: 'github', url: 'https://github.com/AlexSkir/youtube-app/tree/gh-pages' },
      {
        name: 'Terms of reference',
        url: 'https://github.com/rolling-scopes-school/tasks/blob/2018-Q3/tasks/youtube.md',
      },
    ],
  },
  fesco: {
    name: 'Fesco',
    description: `Restaurant Fesco is a single page website that contains the information 
    about the restaurant. The website shows the menu, contacts and allows to book a table 
    in few clicks filling in the form.`,
    tabs: ['all', 'landings'],
    mainTool: ['SASS', 'Responsive layout'],
    avatar: sassIcon,
    technologies: ['HTML', 'SASS', 'JS', 'Responsive layout', 'Perfect Pixel'],
    type: 'Landing page',
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
    description: `Piskel Clone is a simplified clone of Piskel, a web-based tool for 
    creating animated sprites & pixel art.`,
    tabs: ['all', 'app', 'react', 'rss'],
    mainTool: ['React/redux', 'API'],
    avatar: reactIcon,
    technologies: ['React', 'Redux', 'jQuery', 'Canvas', 'Google API', 'Firebase DB'],
    type: 'Web app',
    path: 'Piskel',
    image: PiskelImg,
    links: [
      { name: 'demo', url: 'http://alexskir.github.io/clown/' },
      { name: 'github', url: 'https://github.com/AlexSkir/clown/' },
    ],
  },
  alexis: {
    name: 'Alexis',
    description: `Alexis is a homepage and designed as visit card of the company. 
    Some blocks have "on hover" and "on click" effects.`,
    tabs: ['all', 'landings'],
    mainTool: ['CSS', 'Responsive layout'],
    avatar: cssIcon,
    technologies: ['HTML', 'CSS', 'JS', 'Responsive layout', 'Perfect Pixel'],
    type: 'Landing page',
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
    description: `Hexal is a single page website, product of design experimentations 
    with hexagons and simple animation.`,
    tabs: ['all', 'landings', 'rss'],
    mainTool: ['CSS', 'Static layout'],
    avatar: cssIcon,
    technologies: ['HTML', 'CSS', 'Static layout', 'Perfect Pixel'],
    type: 'Landing page',
    path: 'Hexal',
    image: HexalImg,
    links: [
      { name: 'demo', url: 'https://alexskir.github.io/hexal/' },
      { name: 'github', url: 'https://github.com/AlexSkir/hexal/tree/gh-pages' },
    ],
  },
  gofuck: {
    name: 'GoFuckBiz Forum',
    description: `GoFuckBiz.com - Forum of successful webmasters. The main objective was 
    to create wireless CSS for PHP template with layout for mobile devices.`,
    tabs: ['all'],
    mainTool: ['CSS', 'PHP template'],
    avatar: cssIcon,
    technologies: ['CSS', 'Mobile layout', 'PHP template'],
    type: 'Forum',
    path: 'Gofuck',
    image: GofuckImg,
    links: [
      { name: 'website', url: 'https://www.gofuckbiz.com/' },
      { name: 'github', url: 'https://github.com/AlexSkir/gofuck/blob/master/wireless_css.txt' },
    ],
  },
  gritella: {
    name: 'Gritella lingerie',
    description: `Gritella lingerie is an eCommerce website which is made on WordPress with 
    WooCommerce plugin. Available options: shop, user account, WishList, order info, email
    notification, CMS, etc.`,
    warning: `The project was closed in Aug 2021, the website is now stored 
    on free web hosting and some functionality can be unavailable.`,
    tabs: ['all', 'cms'],
    mainTool: ['WordPress', 'WooCommerce'],
    avatar: wpIcon,
    technologies: [
      'WordPress',
      'WooCommerce',
      'CMS',
      'PHP',
      'JavaScript',
      'Google login',
      'ReCaptcha',
    ],
    type: 'eCommerce website',
    path: 'Gritella',
    image: GritellaImg,
    links: [
      { name: 'demo', url: 'http://d97714j6.beget.tech/' },
      { name: 'github', url: 'https://github.com/AlexSkir/gritella-lingerie' },
    ],
    more: <GritellaProject />,
  },
};

export default projectArr;
