import React from 'react';
import PropTypes from 'prop-types';
import getDictionary from '../../../i18n/dictionaries';
import projectArr from '../projectsArray';
import '../../styles/Project.scss';

export async function generateMetadata({ params }) {
  // read route params
  const { lng, project } = params;
  const t = await getDictionary(lng, 'projects');
  const allData = projectArr(t);
  const data = allData[project];
  const title = `${t.project} ${data.name} - ${data.type} (${data.technologies.join(' • ')})`;
  const image = data.share;
  const { description } = data;
  const path = `/portfolio/${data.path}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://nextjs-portfolio-ydgz.onrender.com${path}`,
      images: [
        {
          url: image.src,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
  };
}

export default async function ProjectLayout({ children }) {
  return <>{children}</>;
}

ProjectLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
