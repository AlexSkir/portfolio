import React from 'react';
import PageLayout from '../../components/PageLayout';
import Project from './Project';
import getDictionary from '../../../i18n/dictionaries';
import projectArr from '../projectsArray';
import AvatarPortfolio from '../../assets/avatar/avatar-ok.png';
import '../../styles/Project.scss';

export async function generateMetadata({ params }) {
  const { lng, project } = params;
  const t = await getDictionary(lng, 'projects');
  const allData = projectArr(t);
  const projectData = allData[project];
  const { name, type, technologies, description, share, path } = projectData;
  const title = `${t.project} ${name} - ${type} (${technologies.join(' • ')})`;
  const url = `/portfolio/${path}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: share.src,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
  };
}

export default async function Page({ params }) {
  const { lng, project } = params;
  const t = await getDictionary(lng, 'projects');
  const allData = projectArr(t);
  const projectData = allData[project];

  return (
    <PageLayout title={t.title} avatar={AvatarPortfolio} lng={lng}>
      <Project data={projectData} t={t} />
    </PageLayout>
  );
}
