import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import PageLayout from '../PageLayout';
import SEO from '../common/SEO';
import HatIcon from './HatGradientIcon';
import BagIcon from './BagGradientIcon';
import ResumeItem from './ResumeItem';
import CardItem from './Card';
import ResumeDownload from '../common/ResumeDownload';

const descr = `I am a Front-end developer`;

const sectionWrapper = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: { xs: '20px', md: '60px' },
};
const blockWrapper = {
  display: 'flex',
  flexDirection: 'column',
};
const titleWrapper = {
  display: 'flex',
  alignItems: 'center',
  mb: { xs: '10px', md: '30px' },
};
const skillsWrapper = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  width: '100%',
  maxWidth: '290px',
};
const skillItem = {
  display: 'inline-block',
  p: '8px',
  mr: '15px',
  mb: '15px',
  backgroundColor: 'primary.accent',
  color: 'primary.contrastText',
  borderRadius: '8px',
};
const skillsBlock = {
  margin: '10px -50px -30px -70px',
  padding: '0 50px 30px 70px',
  backgroundColor: 'primary.background',
};

const rssTechs = `Static, Adaptive and Responsive Design; JS, jQuery, AJAX, React; Bootstrap, 
Material-UI; WebSocket; Google, Youtube, Firebase APIs`;

const workSkills = [
  'JavaScript',
  'React.js',
  'jQuery',
  'HTML',
  'CSS',
  'SCSS',
  'MUI',
  'Bootstrap',
  <Link
    href="https://www.npmjs.com/package/alexskir-reactplate"
    sx={{ color: 'primary.contrastText', textDecoration: 'underline' }}
  >
    Webpack
  </Link>,
  'Babel',
  'Figma',
  'Photoshop',
  'GIT',
  'PHP',
  'MySQL',
  'Docker',
];
const softSkills = [
  'Positive attitude',
  'Self-motivation',
  'Adaptability',
  'Dependability',
  'Fast learner',
  'Problem solving',
  'Attention to details',
  'Hard working',
  'Open-minded',
  'Tolerant',
];

function Resume() {
  const theme = useTheme();

  return (
    <PageLayout title="Resume" avatar="base">
      <SEO title="Aleksandra Skirnevskaia - About me" description={descr} />
      <Box className="resume-section__info-block" sx={sectionWrapper}>
        <Box className="resume-section__education-block" sx={blockWrapper}>
          <Box className="resume-section__block-title" sx={titleWrapper}>
            <HatIcon main={theme.palette.secondary.main} dark={theme.palette.secondary.dark} />
            <Typography variant="subtitle1" sx={{ ml: '10px' }}>
              Education
            </Typography>
          </Box>
          <ResumeItem
            date="2019-2020"
            position="HTML, CSS, JavaScript, React"
            place="Codecademy, Codewars"
            color="pink"
          />
          <CardItem
            date="2019"
            position="JavaScript"
            place="The Rolling Scopes School"
            link="https://rs.school/"
            color="pink"
            techs={rssTechs}
            projectUrl="/Portfolio"
            CTA="watch portfolio"
          />
          <ResumeItem
            date="2009"
            position="Engineer (incomplete)"
            place="Faculty of Radio Design, TUSUR"
            link="https://tusur.ru/"
            color="pink"
          />
        </Box>

        <Box className="resume-section__experience-block" sx={blockWrapper}>
          <Box className="resume-section__block-title" sx={titleWrapper}>
            <BagIcon main={theme.palette.secondary.main} dark={theme.palette.secondary.dark} />
            <Typography variant="subtitle1" sx={{ ml: '10px' }}>
              Experience
            </Typography>
          </Box>
          <ResumeItem
            date="2019-Present"
            position="Freelance Web Developer"
            place="Frontend development, Refactor, SEO, Maintenance"
            color="blue"
          />
          <CardItem
            date="2020-2021"
            position="Freelance Web Developer"
            place="Gritella lingereie"
            link="http://d97714j6.beget.tech/"
            color="blue"
            techs="WordPress & WooCommerce, JS, PHP, SEO, Google API"
            projectUrl="/Portfolio/Gritella"
          />
          <CardItem
            date="2019"
            position="Freelance Web Developer"
            place="GoFuckBiz.com"
            link="https://www.gofuckbiz.com/"
            color="blue"
            techs="Wireless CSS for PHP template, cross-browser responsive design"
            projectUrl="/Portfolio/Gofuck"
          />
        </Box>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
        <ResumeDownload
          title="Download Resume"
          btnStyle={{
            width: '185px',
            height: '44px',
            color: 'secondary.contrastText',
            borderRadius: '20px',
            gap: '10px',
          }}
        />
      </Box>

      <Box className="resume-section__skills-block" sx={{ ...sectionWrapper, ...skillsBlock }}>
        <Box className="resume-section__work-skills" sx={blockWrapper}>
          <Typography variant="subtitle1">Work skills</Typography>
          <Box sx={skillsWrapper}>
            {workSkills.map((item, i) => (
              <Box key={i} sx={skillItem}>
                {item}
              </Box>
            ))}
          </Box>
        </Box>
        <Box className="resume-section__soft-skills" sx={blockWrapper}>
          <Typography variant="subtitle1">Soft skills</Typography>
          <Box sx={skillsWrapper}>
            {softSkills.map((item, i) => (
              <Box key={i} sx={skillItem}>
                {item}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </PageLayout>
  );
}

export default Resume;
