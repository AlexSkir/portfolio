import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import HatIcon from './HatGradientIcon';
import BagIcon from './BagGradientIcon';
import ResumeItem from './ResumeItem';
import CardItem from './Card';
import ResumeDownload from '../common/ResumeDownload';
import PageLayout from '../PageLayout';

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

function Resume() {
  const { i18n, t } = useTranslation();
  const lang = i18n.resolvedLanguage;
  const theme = useTheme();

  return (
    <PageLayout title={t('resume.title')} avatar="base">
      <Box className="resume-section__info-block" sx={sectionWrapper}>
        <Box className="resume-section__education-block" sx={blockWrapper}>
          <Box className="resume-section__block-title" sx={titleWrapper}>
            <HatIcon main={theme.palette.secondary.main} dark={theme.palette.secondary.dark} />
            <Typography variant="subtitle1" sx={{ ml: '10px' }}>
              {t('resume.edu.title')}
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
            techs={t('resume.edu.schoolTechs', { joinArrays: ' ' })}
            projectUrl={`/${lang}/portfolio`}
            CTA={t('resume.edu.cta')}
          />
          <ResumeItem
            date="2009"
            position={t('resume.edu.degree')}
            place={t('resume.edu.faculty')}
            link="https://tusur.ru/"
            color="pink"
          />
        </Box>

        <Box className="resume-section__experience-block" sx={blockWrapper}>
          <Box className="resume-section__block-title" sx={titleWrapper}>
            <BagIcon main={theme.palette.secondary.main} dark={theme.palette.secondary.dark} />
            <Typography variant="subtitle1" sx={{ ml: '10px' }}>
              {t('resume.exp.title')}
            </Typography>
          </Box>
          <CardItem
            date={t('resume.exp.unit1.date')}
            position={t('resume.exp.unit1.position')}
            place=""
            color="blue"
            techs={t('resume.exp.unit1.techs')}
            projectUrl={`/${lang}/portfolio`}
            CTA={t('resume.exp.unit1.cta')}
          />
          <CardItem
            date="2020-2021"
            position={t('resume.exp.unit2.position')}
            place="Gritella lingereie"
            link="http://d97714j6.beget.tech/"
            color="blue"
            techs="WordPress & WooCommerce, JS, PHP, SEO, Google API"
            projectUrl={`/${lang}/portfolio/gritella`}
            CTA={t('resume.exp.unit2.cta')}
          />
          <CardItem
            date="2019"
            position={t('resume.exp.unit3.position')}
            place="GoFuckBiz.com"
            link="https://www.gofuckbiz.com/"
            color="blue"
            techs={t('resume.exp.unit3.techs')}
            projectUrl={`/${lang}/portfolio/gofuck`}
            CTA={t('resume.exp.unit3.cta')}
          />
        </Box>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
        <ResumeDownload
          title={t('common.downloadBtn')}
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
          <Typography variant="subtitle1">{t('resume.skills.work.title')}</Typography>
          <Box sx={skillsWrapper}>
            {workSkills.map((item, i) => (
              <Box key={i} sx={skillItem}>
                {item}
              </Box>
            ))}
          </Box>
        </Box>
        <Box className="resume-section__soft-skills" sx={blockWrapper}>
          <Typography variant="subtitle1">{t('resume.skills.soft.title')}</Typography>
          <Box sx={skillsWrapper}>
            {t('resume.skills.soft.body', { returnObjects: true }).map((item, i) => (
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
