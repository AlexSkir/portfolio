import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PageLayout from '../common/PageLayout';
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
  alignItems: 'center',
  mr: { xs: '0', lg: '60px' },
};
const titleWrapper = {
  display: 'flex',
  alignItems: 'center',
  mb: { xs: '10px', md: '30px' },
};
const resumeItemWrapper = {};

const Resume = ({ location: { pathname } }) => {
  if (pathname !== '/Resume') {
    return null;
  }

  const theme = useTheme();

  return (
    <PageLayout title="Resume">
      <>
        <SEO title="Aleksandra Skirnevskaia - About me" description={descr} />
        <Box className="resume-section" sx={sectionWrapper}>
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
            <ResumeItem
              date="2019"
              position="JavaScript"
              place="The Rolling Scopes School"
              color="pink"
              link="https://rs.school/"
            />
            <ResumeItem
              date="2009"
              position="Engineer (incomplete)"
              place="Faculty of Radio Design, TUSUR"
              link="https://tusur.ru/"
              color="pink"
            />
          </Box>

          <Box className="resume-section__education-block" sx={blockWrapper}>
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
              techs="WordPress & WooCommerce, JavaScript, PHP, SEO, ReCaptcha, Google login"
              projectUrl="#"
            />
          </Box>
        </Box>
      </>
    </PageLayout>
  );
};

Resume.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Resume;
