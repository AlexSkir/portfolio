import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableBody from '@mui/material/TableBody';
import Row from './Row';

/* t('projects.chat.description', { joinArrays: ' ', ns: 'projects' }) */
const homePage = {
  name: 'Home page',
  link: 'https://rss-group10-photographers.netlify.app/',
  features: [
    {
      name: 'Content is presented in 3 languages - English, Belarusian, Russian',
      library: 'react-intl',
    },
    { name: 'Styled components', library: '@material-ui' },
    {
      name: 'Navigation through a page is animated',
      library: 'react-anchor-link-smooth-scroll',
    },
    { name: 'Animated slider with timer on main screen changing images', library: 'slick-slider' },
    { name: 'Styled image gallery', library: 'react-image-gallery' },
    {
      name: 'Date picker with a script changing content according to a date',
      library: 'React',
    },
  ],
};

const persPage = {
  name: 'Photographer page',
  link: 'https://rss-group10-photographers.netlify.app/ru/photographers/person1/',
  features: [
    { name: 'Animated timeline', library: 'vertical-timeline-component-for-react' },
    { name: 'Animated image gallery', library: 'slick-carousel' },
    {
      name: 'Video player for static videos and Youtube videos',
      library: 'video-react, react-youtube',
    },
    { name: 'Google Map API for pins on map', library: 'google-maps-react' },
  ],
};

const allPers = {
  name: 'All photographers page',
  link: 'https://rss-group10-photographers.netlify.app/ru/photographers/',
  features: [
    {
      name: 'Form for searching a person by Name and/or Place field from the list of photographers',
      library: 'React',
    },
  ],
};

export default function CulturePortal() {
  return (
    <>
      <Typography variant="h6">Main features:</Typography>

      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableBody>
            <Row row={homePage} />
            <Row row={persPage} />
            <Row row={allPers} />
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
