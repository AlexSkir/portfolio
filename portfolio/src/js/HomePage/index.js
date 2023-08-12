import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import GTranslateIcon from '@mui/icons-material/GTranslate';

import PageLayout from '../common/PageLayout';
import SEO from '../common/SEO';
import CodeIcon from '../../assets/images/code.svg';
import App from '../../assets/images/App.svg';
import Seo from '../../assets/images/seo.svg';

import ActivityItem from './Activity';

const rowWrapper = {
  display: 'flex',
  flexDirection: { xs: 'column', lg: 'row' },
  justifyContent: 'center',
};

const Home = ({ location: { pathname } }) => {
  if (pathname !== '/' && pathname !== '/Home') {
    return null;
  }
  const theme = useTheme();
  return (
    <PageLayout title="About me">
      <>
        <SEO
          title="About me"
          description="SEO tags with React Helmet."
          name="Awesome Company name."
          type="article"
        />
        <Box>
          <Typography variant="body2">
            Hello there! I&#39;m thrilled to welcome you to my portfolio. I am a passionate and
            versatile Front-end developer with a keen interest in creating the user friendly apps
            and websites. I enjoy applying both new technologies and learning about the Best
            Practice solid solutions. I constantly strive to enhance my skills and embrace emerging
            trends in the industry.
          </Typography>

          <Typography variant="h3" sx={{ my: '25px' }}>
            What I do
          </Typography>

          <Box sx={rowWrapper}>
            <ActivityItem
              icon={<CodeIcon fill={theme.palette.secondary.dark} />}
              title="Web Development"
              color="pink"
              mr
            >
              Crafting visually appealing and intuitive user interfaces that offer a delightful user
              experience is something I&#39;m truly fanatic about. As well as developing new
              user-facing features, optimizing code, building reusable components and using a
              variety of markup languages to create the web pages.
            </ActivityItem>

            <ActivityItem
              icon={<App fill={theme.palette.secondary.main} />}
              title="App Development"
              color="blue"
            >
              As a developer, I find myself most captivated by the power and flexibility of
              React.js. I&#39;m always eager to dive into new projects that leverage React.js,
              Redux, Mui/Bootstrap and other libraries to discover innovative ways to create
              reliable, fast, scalable, and user-friendly applications.
            </ActivityItem>
          </Box>

          <Box sx={{ ...rowWrapper, flexDirection: { xs: 'column-reverse', lg: 'row' } }}>
            <ActivityItem
              icon={<Seo width="24" height="24" fill={theme.palette.secondary.main} />}
              title="SEO optimization"
              color="blue"
              mr
            >
              Nowadays it&#39;s hardly possible to build a successful product without search engine
              optimization and social media marketing to increase the chances of having your content
              surfaced to users.
            </ActivityItem>

            <ActivityItem
              icon={<GTranslateIcon sx={{ color: theme.palette.secondary.dark }} />}
              title="Localization (ru/en)"
              color="pink"
            >
              I also love using different techniques to localize apps and websites from Russian into
              English and vice versa, to promote the product and allow more people to enjoy it.
            </ActivityItem>
          </Box>
        </Box>
      </>
    </PageLayout>
  );
};

Home.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Home;
