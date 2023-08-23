import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PageLayout from '../PageLayout';
import SEO from '../common/SEO';
import HatIcon from './HatGradientIcon';
import BagIcon from './BagGradientIcon';
import ResumeItem from './ResumeItem';
import CardItem from './Card';

const descr = `I am a Front-end developer`;

const sectionWrapper = {
  display: 'flex',
  flexDirection: { xs: 'column', lg: 'row' },
};
const blockWrapper = {
  display: 'flex',
  flexDirection: 'column',
  mr: { xs: '0', lg: '60px' },
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
  width: '290px',
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
  'Figma',
  'Photoshop',
  'GIT',
  'PHP',
  'MySQL',
];
const softSkills = [
  'Positive attitude',
  'Self-motivation',
  'Adaptability',
  'Dependability',
  'Fast learner',
  'Problem solving',
  'Attention to details',
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
            projectUrl="#"
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
            projectUrl="#"
          />
          <CardItem
            date="2019"
            position="Freelance Web Developer"
            place="GoFuckBiz.com"
            link="https://www.gofuckbiz.com/"
            color="blue"
            techs="Wireless CSS for PHP template, cross-browser responsive design"
            projectUrl="#"
          />
        </Box>
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
